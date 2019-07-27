import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const REQUIRED = 'REQUIRED';
export const INVALIDCREDENTIALS = 'INVALIDCREDENTIALS';
export const LOGINFAILED = 'LOGINFAILED';
export const REQUIRED = 'REQUIRED';
export const USERCANNOTBEFOUND = 'USERCANNOTBEFOUND';

export function login () {
    return function(dispatch) {
        dispatch({type: LOADING});

        axios
            .post("https://wunderlist-2.herokuapp.com/api/auth/login")
            .then(res => {
                console.log(res.data);
                dispatch({type: SUCCESS, payload:res.data.results});
            })

            .catch(err =>{
                dispatch({type: REQUIRED, payload:err.response.data});
            });

            
    };
}

export function register () {
    return function(dispatch) {
        dispatch({type: LOADING});

        axios
            .post("https://wunderlist-2.herokuapp.com/api/auth/register")
            .then(res => {
                console.log(res.data);
                dispatch({type: SUCCESS, payload:res.data.results});
            })

            .catch(err =>{
                dispatch({type: REQUIRED, payload:err.response.data});
            });

    };
}