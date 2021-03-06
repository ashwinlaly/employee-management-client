import { toast } from 'react-toastify';
import {history} from '../../Routes/history';
import * as userTypes from '../actionTypes/user';
import {tokenExpired} from '../../Helpers/helpers';
import userService from '../../Service/userService';
import * as commonTypes from '../actionTypes/common';

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
        tokenExpired(error, {type: userTypes.USER_LOGIN_ERROR, payload: error}, dispatch)
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
            toast.error(response.message)
            dispatch({type: userTypes.LISTING_EMPLOYEE_ERROR, payload: response.data})
        } else {
            toast.success(response.message, {position: "bottom-right"})
            dispatch({type: userTypes.LISTING_EMPLOYEE_SUCCESS, payload: response.data})
        }
    }).catch(error => {
        console.log(error)
        tokenExpired(error, {type: userTypes.LISTING_EMPLOYEE_ERROR, payload: error}, dispatch)
    })
}

export const deleteUser = (_id) => dispatch => {
    userService.deleteUser(_id).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: userTypes.DELETE_EMPLOYEE_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: userTypes.DELETE_EMPLOYEE_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: userTypes.DELETE_EMPLOYEE_ERROR, payload: error}, dispatch)
    })
}

export const getUser = (_id) => dispatch => {
    userService.getUser(_id).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: userTypes.GET_EMPLOYEE_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: userTypes.GET_EMPLOYEE_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: userTypes.GET_EMPLOYEE_ERROR, payload: error}, dispatch)
    })
}

export const patchUser = (_id, data) => dispatch => {
    userService.updateUser(_id, data).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: userTypes.UPDATE_EMPLOYEE_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: userTypes.UPDATE_EMPLOYEE_SUCCESS, payload: response.data})
            history.push("/home/user")
        }
    }).catch(error => {
        tokenExpired(error, {type: userTypes.UPDATE_EMPLOYEE_ERROR, payload: error}, dispatch)
    })
}

export const createUser = (data) => dispatch => {
    userService.createUser(data).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: userTypes.CREATE_EMPLOYEE_ERROR, payload: response})
        } else {
            toast.success(response.message)
            dispatch({type: userTypes.CREATE_EMPLOYEE_SUCCESS, payload: response})
            history.push("/home/user")
        }
    }).catch(error => {
        tokenExpired(error, {type: userTypes.CREATE_EMPLOYEE_ERROR, payload: error}, dispatch)
    })
}

export const updatePassword = (data) => dispatch => {
    userService.updatePassword(data).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: userTypes.PASSWORD_RESET_SUCCESSFUL_ERROR, payload: response})
        } else {
            toast.success(response.message)
            dispatch({type: userTypes.PASSWORD_RESET_SUCCESSFUL, payload: response})
            history.push("/home")
        }
    }).catch(error => {
        tokenExpired(error, {type: userTypes.PASSWORD_RESET_SUCCESSFUL_ERROR, payload: error}, dispatch)
    })
}

export const applyLeave = (data) => dispatch => {
    userService.applyLeave(data).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: userTypes.APPLY_FOR_LEAVE_ERROR, payload: response})
        } else {
            toast.success(response.message)
            dispatch({type: userTypes.APPLY_FOR_LEAVE_SUCCESS, payload: response})
            history.push("/home/leave")
        }
    }).catch(error => {
        tokenExpired(error, {type: userTypes.APPLY_FOR_LEAVE_ERROR, payload: error}, dispatch)
    })
}

export const getuserLeave = () => dispatch => {
    userService.getuserLeave().then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: userTypes.GET_USER_LEAVE_FOR_LISTING_ERROR, payload: response})
        } else {
            toast.success(response.message)
            dispatch({type: userTypes.GET_USER_LEAVE_FOR_LISTING_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: userTypes.GET_USER_LEAVE_FOR_LISTING_ERROR, payload: error}, dispatch)
    })
}

export const getAllUserLeave = () => dispatch => {
    userService.getAllUserLeave().then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: userTypes.GET_ALL_USER_LEAVE_FOR_LISTING_ERROR, payload: response})
        } else {
            toast.success(response.message)
            dispatch({type: userTypes.GET_ALL_USER_LEAVE_FOR_LISTING_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: userTypes.GET_ALL_USER_LEAVE_FOR_LISTING_ERROR, payload: error}, dispatch)
    })
}

export const approveLeave = (data) => dispatch => {
    userService.applyLeave(data).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: userTypes.USER_LEAVE_APPROVED_ERROR, payload: response})
        } else {
            toast.success(response.message)
            dispatch({type: userTypes.USER_LEAVE_APPROVED_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: userTypes.USER_LEAVE_APPROVED_ERROR, payload: error}, dispatch)
    })
}

export const logout = () => dispatch => {
    dispatch({type: commonTypes.LOGOUT})   
    history.push("/login")
}