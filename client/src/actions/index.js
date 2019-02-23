import axios from 'axios';
import { MESSAGE, AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT, GET_USERS } from './types';

/////////////////
///   Login   ///
/////////////////

export const oauthGoogle = data => {
    return async dispatch => {
        // Make the request to the server-side
        const res = await axios.post('http://localhost:5000/util/login', {
            accessToken: data.accessToken,
            googleId: data.googleId,
            name: data.name,
            email: data.email
        });
        console.log(res.data);
        // If the token returns null (not using a MMSD email) exit function
        if ( res.data.token == null ) {
            console.log("Please utilize a MMSD email");
            return;
        }
        // Dispatch data to be called and checked for later
        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data.token
        });
        // Save data for component use
        localStorage.setItem('JWT_TOKEN', res.data.token);
        localStorage.setItem('GoogleID', data.googleId );

    }
}

////////////////////
///   Sign-Out   ///
////////////////////

export const signOut = () => {
    return dispatch => {
        // Remove the token (log them out)
        localStorage.removeItem('JWT_TOKEN');
        // Complete action
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
        // Make the request for users
        const res = await axios.post('http://localhost:5000/util/getusers', {});
        // Save the data for users
        dispatch({
            type: GET_USERS,
            payload: res.data.users
        })
        // Save it in a JSON format
        localStorage.setItem('Users', JSON.stringify(res.data.users) );

    }
}

export const promoteUser = data => {
    return async dispatch => {
        // Make the request to promote
        const res = await axios.post('http://localhost:5000/util/promote', {
            tid: data.target,
            uid: data.user
        });
        // Grab the message to display for later
        dispatch({
            type: MESSAGE,
            payload: res.data.message
        });

    }
}

export const demoteUser = data => {
    return async dispatch => {
        // Make the request to demote
        const res = await axios.post('http://localhost:5000/util/demote', {
            tid: data.target,
            uid: data.user
        });
        // Grab the message to display for later
        dispatch({
            type: MESSAGE,
            payload: res.data.message
        });

    }
}

////////////////////
///   Articles   ///
////////////////////

export const addArticle = data => {
    return async dispatch => {

        const res = await axios.post('http://localhost:5000/article/newarticle', {
            uid: data.user,
            titl: data.title,
            head: data.head,
            txt: data.txt
        });

        console.log( "whattt" );

        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data.titl
        });

    }
}

export const delArticle = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:5000/article/delarticle');



    }
}

export const editArticle = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:5000/article/editarticle');



    }
}

export const approveArticle = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:5000/article/approvearticle');



    }
}
