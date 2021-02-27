import projectService from '../../Service/projectService';
import * as types from '../actionTypes/project';
import history from '../store';

export const createProject = (data) => dispatch => {
    projectService.createProject(data).then(data => {
        dispatch({type: types.CREATE_PROJECT_SUCCESS, payload:data})
    }).catch(error => {
        dispatch({type: types.CREATE_PROJECT_ERROR, payload:error})
    })
}