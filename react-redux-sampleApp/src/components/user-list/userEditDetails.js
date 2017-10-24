import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { editUserData } from './users.actions'


class UserDetailsEdit extends Component {

    constructor (props) {
        super(props);

        const userId = this.props.match.params.id;
        const userDetail = this.props.userDetail.find(user => user.userId === +userId);

        this.state = {
            name: userDetail.name,
            age: userDetail.age,
            gender: userDetail.gender,
            city: userDetail.city,
            userId: userDetail.userId,
        };
    }

    onTextChange = (text, field) => {
        this.setState({[field]: text});
    }


    render() {
        return (
            <div className="user-card clearfix">
                <h3>Edit User Details</h3>

                <form validate autoComplete="off">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" onChange={(e) => {
                            this.onTextChange(e.target.value, 'name');
                        }} value={this.state.name} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="text" onChange={(e) => {
                            this.onTextChange(e.target.value, 'age');
                        }} value={this.state.age} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <input type="text" onChange={(e) => {
                            this.onTextChange(e.target.value, 'gender');
                        }} value={this.state.gender} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" onChange={(e) => {
                            this.onTextChange(e.target.value, 'city');
                        }} value={this.state.city} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <Link to={`/userDetail/${this.state.userId}`} onClick={() => this.props.submitEditUserData(this.state)} className="btn btn-primary">Save</Link>
                        &nbsp;
                        <Link to={`/userDetail/${this.state.userId}`} className="btn btn-danger">Cancel</Link>
                    </div>
                </form>
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
        submitEditUserData: (userDetail) => {
            dispatch(editUserData(userDetail));
        }
    }
};


const UserEditContainer = connect(mapStateToProps,mapDispatchToProps)(UserDetailsEdit);

export default UserEditContainer;