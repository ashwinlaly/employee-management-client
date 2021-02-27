import * as types from '../actionTypes/project';

export default (projects = {}, action) => {
    switch (action.type) {
        case types.LISTING_PROJECT_SUCCESS:
            return {...projects, projects: action.payload}
        default:
            return projects
    }
}