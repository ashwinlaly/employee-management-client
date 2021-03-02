import userService from '../../Service/userService';
import * as userTypes from '../actionTypes/user';
import * as commonTypes from '../actionTypes/common';

import {history} from '../../Routes/history';

export const loginAction = (data) => dispatch => {
    userService.signin(data).then(response => {
        if(response.code === 422 || response.code === 206) {
            dispatch({type: userTypes.USER_LOGIN_ERROR, payload: response})
        } else {
            window.localStorage.removeItem("jwt")
            window.localStorage.setItem('jwt', JSON.stringify(response.data))
            dispatch({type: userTypes.USER_LOGIN_SUCCESS, payload: response})
            history.push("/home")
        }
    }).catch(error => {
        dispatch({type: userTypes.USER_LOGIN_ERROR, payload: null})
    })
}

export const onLoad = (payload, token) => dispatch =>{
    dispatch({type: commonTypes.APP_LOAD, payload, token})
}

export const onRedirect = () => dispatch =>{
    dispatch({type: commonTypes.REDIRECT})
}

export const getAllUser = () => dispatch => {
    userService.getUsers().then(response => {
        if(response.code === 422 || response.code === 206) {
            dispatch({type: userTypes.LISTING_EMPLOYEE_ERROR, payload: response.data})
        } else {
            dispatch({type: userTypes.LISTING_EMPLOYEE_SUCCESS, payload: response.data})
        }
    }).catch(error => {
        dispatch({type: userTypes.LISTING_EMPLOYEE_ERROR, payload: error})
    })
}

export const deleteUser = (_id) => dispatch => {
    userService.deleteUser(_id).then(response => {
        if(response.code === 422 || response.code === 206) {
            dispatch({type: userTypes.DELETE_EMPLOYEE_ERROR, payload: response.data})
        } else {
            dispatch({type: userTypes.DELETE_EMPLOYEE_SUCCESS, payload: response.data})
        }
    }).catch(error => {
        dispatch({type: userTypes.DELETE_EMPLOYEE_ERROR, payload: error})
    })
}

export const getUser = (_id) => dispatch => {
    userService.getUser(_id).then(response => {
        if(response.code === 422 || response.code === 206) {
            dispatch({type: userTypes.GET_EMPLOYEE_ERROR, payload: response.data})
        } else {
            dispatch({type: userTypes.GET_EMPLOYEE_SUCCESS, payload: response})
        }
    }).catch(error => {
        dispatch({type: userTypes.GET_EMPLOYEE_ERROR, payload: error})
    })
}

export const patchUser = (_id, data) => dispatch => {
    userService.updateUser(_id, data).then(response => {
        if(response.code === 422 || response.code === 206) {
            dispatch({type: userTypes.UPDATE_EMPLOYEE_ERROR, payload: response.data})
        } else {
            dispatch({type: userTypes.UPDATE_EMPLOYEE_SUCCESS, payload: response.data})
        }
    }).catch(error => {
        dispatch({type: userTypes.UPDATE_EMPLOYEE_ERROR, payload: error})
    })
}

export const logout = () => dispatch => {
    dispatch({type: commonTypes.LOGOUT})   
    history.push("/login")
}