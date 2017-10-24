import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import './index.css'
import {Provider} from 'react-redux'
import store from './components/store/store.create';

import {Route, BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route to="/" component={App}></Route>
        </Router>
    </Provider>, document.getElementById('root')
)