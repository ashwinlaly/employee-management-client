import {history} from '../../Routes/history';
import * as commonTypes from '../actionTypes/common';
import * as projectTypes from '../actionTypes/project';
import projectService from '../../Service/projectService';

export const createProject = (data) => dispatch => {
    projectService.createProject(data).then(data => {
        dispatch({type: projectTypes.CREATE_PROJECT_SUCCESS, payload:data})
    }).catch(error => {
        dispatch({type: projectTypes.CREATE_PROJECT_ERROR, payload:error})
    })
}

export const getProject = (_id) => dispatch => {
    projectService.getProject(_id).then(response=> {
        if(response.code === 422 || response.code === 206) {
            dispatch({type: projectTypes.GET_PROJECT_ERROR, payload: response.data})
        } else {
            dispatch({type: projectTypes.GET_PROJECT_SUCCESS, payload: response})
        }
    }).catch(error => {
        dispatch({type: projectTypes.GET_PROJECT_ERROR, payload: error})
    })
}

export const getProjects = () => dispatch => {
    projectService.getProjects().then(response=> {
        if(response.code === 422 || response.code === 206) {
            dispatch({type: projectTypes.GET_PROJECT_ERROR, payload: response.data})
        } else {
            dispatch({type: projectTypes.GET_PROJECT_SUCCESS, payload: response})
        }
    }).catch(error => {
        if(error.response.status === 403) {
            window.localStorage.removeItem("jwt")
            dispatch({type: commonTypes.TOKEN_EXPIRED})
            history.push("/")
        } else {
            dispatch({type: projectTypes.GET_PROJECT_ERROR, payload: error})
        }
    })
}

export const deleteProject = (_id) => dispatch => {
    projectService.deleteProject(_id).then(response=> {
        if(response.code === 422 || response.code === 206) {
            dispatch({type: projectTypes.DELETE_PROJECT_ERROR, payload: response.data})
        } else {
            dispatch({type: projectTypes.DELETE_PROJECT_SUCCESS, payload: response})
        }
    }).catch(error => {
        if(error.response.status === 403) {
            window.localStorage.removeItem("jwt")
            dispatch({type: commonTypes.TOKEN_EXPIRED})
            history.push("/")
        } else {
            dispatch({type: projectTypes.DELETE_PROJECT_ERROR, payload: error})
        }
    })
}