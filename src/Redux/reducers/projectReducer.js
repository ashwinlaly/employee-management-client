import * as projectTypes from '../actionTypes/project';

export default (projects = {}, action) => {
    switch (action.type) {
        case projectTypes.GET_PROJECT_ERROR:
            return {...projects, currentProject: null, errormessage: action.payload.message, successmessage: ''}
        case projectTypes.GET_PROJECT_SUCCESS:
            return {...projects, currentProject: action.payload.data, errormessage: '', successmessage: action.payload.message}
        case projectTypes.CREATE_PROJECT_ERROR:
            return {...projects, errormessage: action.payload.message, successmessage: '', errors: action.payload.error}
        case projectTypes.DELETE_PROJECT_ERROR:
            return {...projects, projects: action.payload.data, currentProject: null, errormessage: action.payload.message, successmessage: ''}
        case projectTypes.LISTING_PROJECT_ERROR:
            return {...projects, projects: action.payload.data, currentProject: null, errormessage: action.payload.message, successmessage: ''}
        case projectTypes.DELETE_PROJECT_SUCCESS:
            return {...projects, projects: action.payload.data, currentProject: null, errormessage: action.payload.message, successmessage: ''}
        case projectTypes.LISTING_PROJECT_SUCCESS:
            return {...projects, projects: action.payload.data, currentProject: null, errormessage: '', successmessage: action.payload.message}
        default:
            return projects
    }
}