import * as departmentTypes from '../actionTypes/department';

export default (state = {}, action) => {
    switch (action.type) {
        case departmentTypes.GET_DEPARTMENT_ERROR:
            return {...state, currentDepartment: action.payload.data, errormessage: action.payload.message, successmessage: ''}
        case departmentTypes.GET_DEPARTMENT_SUCCESS:
            return {...state, currentDepartment: action.payload.data, errormessage: '', successmessage: action.payload.message}
        case departmentTypes.DELETE_DEPARTMENT_ERROR:
            return {...state, departments: action.payload.data, errormessage: action.payload.message, successmessage: ''}
        case departmentTypes.LISTING_DEPARTMENT_ERROR:
            return {...state, departments: action.payload.data, currentDepartment : null, errormessage: action.payload.message, successmessage: ''}
        case departmentTypes.DELETE_DEPARTMENT_SUCCESS:
            return {...state, departments: action.payload.data, errormessage: '', successmessage: action.payload.message}
        case departmentTypes.LISTING_DEPARTMENT_SUCCESS:
            return {...state, departments: action.payload.data, currentDepartment: null, errormessage: '', successmessage: action.payload.message}
        default:
            return state
    }
}