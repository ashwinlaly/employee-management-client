import * as projectTypes from '../actionTypes/project';

export default (projects = {}, action) => {
    // console.log("project Reducer -> ",action.type, action.payload)
    switch (action.type) {
        case projectTypes.LISTING_PROJECT_SUCCESS:
            return {...projects, projects: action.payload}
        case projectTypes.GET_PROJECT_SUCCESS:
            return {...projects, projects: action.payload.data}
        case projectTypes.GET_PROJECT_ERROR:
            return {...projects, projects: action.payload}
        default:
            return projects
    }
}