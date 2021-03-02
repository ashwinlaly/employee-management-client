import * as departmentTypes from '../actionTypes/department';

export default (state = {}, action) => {
    switch (action.type) {
        case departmentTypes.LISTING_DEPARTMENT_SUCCESS:
            return {...state, departments: action.payload.data, currentDepartment: null, errormessage: '', successmessage: action.payload.message}
        case departmentTypes.LISTING_DEPARTMENT_ERROR:
            return {...state, departments: action.payload.data, currentDepartment : null, errormessage: action.payload.message, successmessage: ''}
        case departmentTypes.DELETE_DEPARTMENT_ERROR:
            return {...state, departments: action.payload.data}
        case departmentTypes.DELETE_DEPARTMENT_SUCCESS:
            return {...state, departments: action.payload.data}
        case departmentTypes.GET_DEPARTMENT_SUCCESS:
            return {...state, currentDepartment: action.payload.data}
        default:
            return state
    }
}