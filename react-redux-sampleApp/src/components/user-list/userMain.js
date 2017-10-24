import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

import {showUserData} from './users.actions';

class UserListMain extends Component {


    render() {
        const testData = this.props.users;
        let newArr = testData.map((i) => {

            return (
                <tr key={i.userId} onClick={() => this.props.redirectToDetails(i)}>
                    <td><Link to={`/userDetail/${i.userId}`}>{i.name}</Link></td>
                    <td>{i.age}</td>
                </tr>
            )
        })

        return (
            <div className="user-list-main container">
                <h2 className="text-center">Users Directory</h2><br/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    {newArr}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        users: store.usersData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        redirectToDetails: (userId) => {
            dispatch(showUserData(userId));
        }
    }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(UserListMain);

export default AppContainer;