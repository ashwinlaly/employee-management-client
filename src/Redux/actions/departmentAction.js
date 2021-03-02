import { toast } from 'react-toastify';
import {history} from '../../Routes/history';
import * as commonTypes from '../actionTypes/common';
import * as departmentTypes from '../actionTypes/department';
import departmentService from '../../Service/departmentService';

const tokenExpired = (error, actionType, dispatch) => {
    if(error.response.status === 403) {
        window.localStorage.removeItem("jwt")
        dispatch({type: commonTypes.TOKEN_EXPIRED})
        history.push("/")
    } else {
        dispatch(actionType)
    }
}

export const getDepartments = () => dispatch => {
    departmentService.getDepartments().then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: departmentTypes.LISTING_DEPARTMENT_ERROR, payload: response.data})
        } else {
            toast.success(response.message, {position: "bottom-right"})
            dispatch({type: departmentTypes.LISTING_DEPARTMENT_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: departmentTypes.LISTING_DEPARTMENT_ERROR, payload: error}, dispatch)
    })
}

export const getDepartment = (_id) => dispatch => {
    departmentService.getDepartment(_id).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: departmentTypes.GET_DEPARTMENT_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: departmentTypes.GET_DEPARTMENT_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: departmentTypes.GET_DEPARTMENT_ERROR, payload: error}, dispatch)
    })
}

export const createDepartment = (data) => dispatch => {
    departmentService.createDepartment(data).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: departmentTypes.CREATE_DEPARTMENT_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: departmentTypes.CREATE_DEPARTMENT_SUCCESS, payload: response})
            history.push("/home/department")
        }
    }).catch(error => {
        tokenExpired(error, {type: departmentTypes.CREATE_DEPARTMENT_ERROR, payload: error}, dispatch)
    })   
}

export const deleteDepartment = (_id) => dispatch => {
    departmentService.deleteDepartment(_id).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: departmentTypes.DELETE_DEPARTMENT_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: departmentTypes.DELETE_DEPARTMENT_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: departmentTypes.DELETE_DEPARTMENT_ERROR, payload: error}, dispatch)
    })
}

export const patchDepartment = (_id, data) => dispatch => {
    departmentService.patchDepartment(_id, data).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: departmentTypes.UPDATE_DEPARTMENT_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: departmentTypes.UPDATE_DEPARTMENT_SUCCESS, payload: response})
            history.push("/home/department")
        }
    }).catch(error => {
        tokenExpired(error, {type: departmentTypes.UPDATE_DEPARTMENT_ERROR, payload: error}, dispatch)
    })   
}