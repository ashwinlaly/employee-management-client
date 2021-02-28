import projectService from '../../Service/projectService';
import * as projectTypes from '../actionTypes/project';
import history from '../store';

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
        dispatch({type: projectTypes.GET_PROJECT_ERROR, payload: error})
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
        dispatch({type: projectTypes.DELETE_PROJECT_ERROR, payload: error})
    })
}