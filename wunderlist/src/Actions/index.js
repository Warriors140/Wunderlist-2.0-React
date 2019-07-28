import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const REQUIRED = 'REQUIRED';
export const INVALIDCREDENTIALS = 'INVALIDCREDENTIALS';
export const LOGINFAILED = 'LOGINFAILED';
export const REQUIRED = 'REQUIRED';
export const USERCANNOTBEFOUND = 'USERCANNOTBEFOUND';

export const login = (username, password) => async dispatch => {
    return function(dispatch) {
        dispatch({type: LOADING});

        axios
            .post("https://wunderlist-2.herokuapp.com/api/auth/login", {username, password})
            .then(res => {
                console.log(res.data);
                dispatch({type: SUCCESS, payload:res.data.results});
            })

            .catch(err =>{
                dispatch({type: REQUIRED, payload:err.response.data});
            });

            
    };
}

export const register = (username, password, firstName, lastName) => async dispatch => {
    return function(dispatch) {
        dispatch({type: LOADING});

        axios
            .post("https://wunderlist-2.herokuapp.com/api/auth/register", {username, password, firstName, lastName})
            .then(res => {
                console.log(res.data);
                dispatch({type: SUCCESS, payload:res.data.results});
            })

            .catch(err =>{
                dispatch({type: REQUIRED, payload:err.response.data});
            });

    };
}