import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {showEditUserData} from './users.actions';


class UserDetail extends Component {
    render() {

        const userId = this.props.match.params.id;
        const userDetail = this.props.userDetail.find(user => user.userId === +userId);

        return (
            <div className="user-card clearfix">
                <div className="edit-user" onClick={() => this.props.redirectToEditDetails(userDetail)}>
                    <Link to={`/edit/${userDetail.userId}`} >Edit</Link>
                </div>
                <h3>User Details</h3>
                <div className="col-xs-4 user-img text-center">
                    <img alt="" src="https://randomuser.me/api/portraits/men/15.jpg"/>
                </div>
                <div className="col-xs-8">
                    <p>Name : {userDetail.name}</p>
                    <p>Age : {userDetail.age}</p>
                    <p>Gender : {userDetail.gender} </p>
                    <p>City : {userDetail.city} </p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        userDetail: store.usersData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        redirectToEditDetails: (userId) => {
            dispatch(showEditUserData(userId));
        }
    }
};


const UserDetailContainer = connect(mapStateToProps,mapDispatchToProps)(UserDetail);

export default UserDetailContainer;
