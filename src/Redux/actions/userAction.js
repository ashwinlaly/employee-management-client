import userService from '../../Service/userService';
import * as userTypes from '../actionTypes/user';
import * as commonTypes from '../actionTypes/common';

import {history} from '../../Routes/history';

export const loginAction = (data) => dispatch => {
    userService.signin(data).then(res => {
        if(res.code === 422 || res.code === 206) {
            dispatch({type: userTypes.USER_LOGIN_ERROR, payload: res})
        } else {
            dispatch({type: userTypes.USER_LOGIN_SUCCESS, payload: res})
            history.push("/project")
        }
    }).catch(error => {
        console.log("error", error)
    })
}

export const onLoad = (payload, token) => dispatch =>{
    dispatch({type: commonTypes.APP_LOAD, payload, token})
}

export const onRedirect = () => dispatch =>{
    dispatch({type: commonTypes.REDIRECT})
}