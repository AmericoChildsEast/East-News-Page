import axios from 'axios';
import { AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT } from './types';

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

    }
}

export const signOut = () => {
    return dispatch => {
        localStorage.removeItem('JWT_TOKEN');

        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        })
    }
}