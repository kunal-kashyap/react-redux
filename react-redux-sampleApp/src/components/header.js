import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">React Sample Apps</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink exact activeClassName="active-nav" to="/userlist">User list</NavLink></li>
                        <li><NavLink activeClassName="active-nav" to="/cart">Cart</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;