import { MESSAGE, AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT, GET_USERS } from '../actions/types';

const DEFAULT_STATE = {
    isAuthenticated: false,
    token: '',
    errorMessage: '',
    Message: '',
}

export default ( state = DEFAULT_STATE, action ) => {
    switch(action.type) {
        case AUTH_SIGN_UP:
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
        case AUTH_SIGN_OUT:
            return { ...state, token: action.payload, isAuthenticated: false, errorMessage: ''}
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload }
        case GET_USERS:
            return { ...state, users: action.payload }
        case MESSAGE:
            return { ...state, Message: action.payload }
        default:
            return state;
    }
    
}