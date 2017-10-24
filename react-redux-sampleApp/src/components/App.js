import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Header from "./header";
import AppContainer from "../components/user-list/userMain";
import UserDetailContainer from "../components/user-list/userDetails";
import UserDetailsEdit from "../components/user-list/userEditDetails";
import Cart from "../components/cart/Cart";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Route exact path="/" component={AppContainer}></Route>
                <Route path="/userDetail/:id" component={UserDetailContainer}></Route>
                <Route path="/edit/:id" component={UserDetailsEdit}></Route>
                <Route path="/cart" component={Cart}></Route>
            </div>
        )
    }
}

export default App;