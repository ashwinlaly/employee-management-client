import { toast } from 'react-toastify';
import {history} from '../../Routes/history';
import * as commonTypes from '../actionTypes/common';
import * as projectTypes from '../actionTypes/project';
import projectService from '../../Service/projectService';

const tokenExpired = (error, actionType, dispatch) => {
    if(error.response.status === 403) {
        window.localStorage.removeItem("jwt")
        dispatch({type: commonTypes.TOKEN_EXPIRED})
        history.push("/")
    } else {
        toast.error(actionType.type)
        dispatch(actionType)
    }
}

export const createProject = (data) => dispatch => {
    projectService.createProject(data).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: projectTypes.CREATE_PROJECT_ERROR, payload: response})
        } else {
            toast.success(response.message, {position: "bottom-right"})
            dispatch({type: projectTypes.CREATE_PROJECT_SUCCESS, payload:response})
            history.push("/home/project")
        }
    }).catch(error => {
        tokenExpired(error, {type: projectTypes.CREATE_PROJECT_ERROR, payload: error}, dispatch)
    })
}

export const getProject = (_id) => dispatch => {
    projectService.getProject(_id).then(response=> {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: projectTypes.GET_PROJECT_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: projectTypes.GET_PROJECT_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: projectTypes.GET_PROJECT_ERROR, payload: error}, dispatch)
    })
}

export const getProjects = () => dispatch => {
    projectService.getProjects().then(response=> {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: projectTypes.LISTING_PROJECT_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: projectTypes.LISTING_PROJECT_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: projectTypes.LISTING_PROJECT_ERROR, payload: error}, dispatch)
    })
}

export const deleteProject = (_id) => dispatch => {
    projectService.deleteProject(_id).then(response=> {
        
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: projectTypes.DELETE_PROJECT_ERROR, payload: response})
        } else {
            toast.success(response.message)
            dispatch({type: projectTypes.DELETE_PROJECT_SUCCESS, payload: response})
            history.push("/home/project")
        }
    }).catch(error => {
        tokenExpired(error, {type: projectTypes.DELETE_PROJECT_ERROR, payload: error}, dispatch)
    })
}

export const updateProject = (_id, data) => dispatch => {
    projectService.updateProect(_id, data).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: projectTypes.UPDATE_PROJECT_ERROR, payload: response})
        } else {
            toast.success(response.message)
            dispatch({type: projectTypes.UPDATE_PROJECT_SUCCESS, payload: response})
            history.push("/home/project")
        }        
    }).catch(error => {
        tokenExpired(error, {type: projectTypes.UPDATE_PROJECT_ERROR, payload: error}, dispatch)
    })
}