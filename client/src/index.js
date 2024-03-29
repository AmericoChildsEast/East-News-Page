import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import SignOut from './components/SignOut';

import reducers from './reducers';

const jwtToken = localStorage.getItem('JWT_TOKEN');

ReactDOM.render(
    <Provider store={createStore(reducers, {
        auth: {
            token: jwtToken,
            isAuthenticated: jwtToken ? true : false
        }
    }, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signout" component={SignOut} />
                <Route exact path="/dashboard" component={Dashboard} />
            </App>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
