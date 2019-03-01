import axios from 'axios';
import { MESSAGE, AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT, GET_USERS } from './types';

/////////////////
///   Login   ///
/////////////////

// This will be reworked from scratch in the future, for the time being we'll be using it for testing.
// async oauthGoogle( { accessToken: string, googleId: string, name: string, email: string } )
export const oauthGoogle = data => {
    return async dispatch => {
        // Make the request to the server-side
        const res = await axios.post('http://localhost:5000/util/login', {
            accessToken: data.accessToken,  // User's accessToken (returned from module)
            googleId: data.googleId,        // User's googleID    (returned from module)
            name: data.name,                // User's name        (returned from module)
            email: data.email               // User's email       (returned from module)
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

// This function will be modified after changing the authentication method for Google login
// signOut();
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

// ****** Still needs reducers & dispatch for confirming actions or failure
// async getUsers();
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

// ****** Still needs reducers & dispatch for confirming actions or failure
// async promoteUser( { target: string, user: string } );
export const promoteUser = data => {
    return async dispatch => {
        // Make the request to promote
        const res = await axios.post('http://localhost:5000/util/promote', {
            tid: data.target,   // Target's ID
            uid: data.user      // User's ID
        });
        // Grab the message to display for later
        dispatch({
            type: MESSAGE,
            payload: res.data.message
        });

    }
}

// ****** Still needs reducers & dispatch for confirming actions or failure
// async demoteUser( { target: string, user: string } );
export const demoteUser = data => {
    return async dispatch => {
        // Make the request to demote
        const res = await axios.post('http://localhost:5000/util/demote', {
            tid: data.target, // Target's ID
            uid: data.user    // User's ID
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

// ****** Still needs reducers & dispatch for confirming actions or failure
// async addArticle( { user: string, title: string, head: string, txt: string } );
export const addArticle = data => {
    return async dispatch => {
        // Making the route request to the backend
        const res = await axios.post('http://localhost:5000/article/newarticle', {
            uid: data.user,     // User's ID
            titl: data.title,   // Desired post title
            head: data.head,    // Desired post header
            txt: data.txt       // Desired post body/text
        });
        // The post will automatically save the date and necessary data formatting
    }
}

// ****** Still needs reducers & dispatch for confirming actions or failure
// async delArticle( { user: string, pid: string } );
export const delArticle = data => {
    return async dispatch => {
        // Making the route request to the backend
        const res = await axios.post('http://localhost:5000/article/delarticle', {
            uid: data.user, // User's ID
            pid: data.pid   // Post's ID
        });

    }
}

// ****** Still needs reducers & dispatch for confirming actions or failure
// async editArticle( { user: string, pid: string, title: string, head: string, txt: string } );
export const editArticle = data => {
    return async dispatch => {
        console.log(data.head);
        const res = await axios.post('http://localhost:5000/article/editarticle', {
            titl: data.title,   // Desired new title (Leave NULL for no change)
            head: data.head,    // Desired new header (Leave NULL for no change)
            txt:  data.txt,     // Desired new body text (Leave NULL for no change)
            uid:  data.user,    // User's ID
            pid:  data.pid      // Post's ID
        });

        // Editing the article will update the "edit" time field. The post will need to be approved
    }
}

// ****** Still needs reducers & dispatch for confirming actions or failure
// async delArticle( { user: string, pid: string } );
export const approveArticle = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:5000/article/approvearticle', {
            uid: data.user, // User's ID
            pid: data.pid   // Post's ID
        });
    }
}

// In the future, we'll have a field to get ONLY approved articles, right now there's no restrictions for testing purposes
// ****** Still needs reducers & dispatch for confirming actions or failure
// async delArticle( { user: string, pid: string, br: int, er: int } );
export const getArticles = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:5000/article/getarticles', {
           // br: data.br,  // Beginning range [indexes at 0]
           // er: data.er   // Ending range 
        });
        // Until we user reduces/dispatch for efficiency, we store posts for testing and formatting
        localStorage.setItem('Posts', JSON.stringify(res.data.posts) );

        /*
            ////////////////////////////////////////
            ///      Current Data Structure      ///
            ////////////////////////////////////////

            (After mapping the data)

            v.data || v = value (from key) & data = desired value
            Ex.) articles.author
            
            { Post: 
                {
                    author, [User's ID] || In the future we'll have getter function for requesting names
                    title:    string       [Post's title]
                    header:   string       [Header's image url]
                    body:     string       [Header's body text]
                    approval: boolean      [Approval status]
                    date:     string       [Original creation date]
                    edit:     string       [Last edit date]

                }
            }
        */

    }
}

