import axios from 'axios';
import { MESSAGE, AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT, GET_USERS } from './types';

/////////////////
///   Login   ///
/////////////////

export const oauthGoogle = data => {
    return async dispatch => {

        const res = await axios.post('http://localhost:5000/util/login', {
            accessToken: data.accessToken,
            googleId: data.googleId,
            name: data.name,
            email: data.email
        });

        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data.token
        });

        localStorage.setItem('JWT_TOKEN', res.data.token);
        localStorage.setItem('GoogleID', data.googleId );

    }
}

////////////////////
///   Sign-Out   ///
////////////////////

export const signOut = () => {
    return dispatch => {
        localStorage.removeItem('JWT_TOKEN');
        
        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        })
    }
}

/////////////////
///   Users   ///
/////////////////

export const getUsers = () => {
    return async dispatch => {

        const res = await axios.post('http://localhost:5000/util/getusers', {});

        console.log(res.data.users);

        dispatch({
            type: GET_USERS,
            payload: res.data.users
        })

        localStorage.setItem('Users', JSON.stringify(res.data.users) );

    }
}

export const promoteUser = data => {
    return async dispatch => {
        
        console.log(data);
        
        const res = await axios.post('http://localhost:5000/util/promote', {
            tid: data.target,
            uid: data.user
        });

        console.log( res.data );

        dispatch({
            type: MESSAGE,
            payload: res.data.message
        });

        
    }
}

export const demoteUser = data => {
    return async dispatch => {

        console.log(data);
        
        const res = await axios.post('http://localhost:5000/util/demote', {
            tid: data.target,
            uid: data.user
        });

        console.log( res.data );

        dispatch({
            type: MESSAGE,
            payload: res.data.message
        });

    }
}

////////////////////
///   Articles   ///
////////////////////