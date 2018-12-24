import axios from 'axios';

export const signIn = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('http://localhost:5000/util/login');
            console.log('res', res );
        } catch(err) {
            console.log( err );
        }
    }
}