import * as userTypes from '../actionTypes/user';

export default (state = {}, action) => {
    switch (action.type) {
        case userTypes.LISTING_EMPLOYEE_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        case userTypes.LISTING_EMPLOYEE_ERROR:
            return {
                ...state,
                users: [],
                errormessage: action.payload.message
            }           
        case userTypes.USER_LOGIN_SUCCESS:
            return {...state }
        case userTypes.GET_EMPLOYEE_ERROR:
            return {
                ...state,
                user: [],
                errormessage: action.payload.message
            };
        case userTypes.GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                user: action.payload.data,
                successmessage: action.payload.message
            };
        default:
            return state
    }
}

// CONNETION_SUCCESS
// CONNETION_ERROR
// USER_LOGIN_SUCCESS
// USER_LOGIN_ERROR
// USER_SIGNUP_ERROR
// USER_SIGNUP_SUCCESS
// SERVER_ERROR
// INVALID_URL
// APPLICAITON_RUNNING
// INVALID_TOKEN
// TOKEN_EXPIRED
// INVALID_USER_ACCESS
// GET_EMPLOYEE_SUCCESS
// GET_EMPLOYEE_ERROR
// CREATE_EMPLOYEE_SUCCESS
// CREATE_EMPLOYEE_ERROR
// UPDATE_EMPLOYEE_SUCCESS
// UPDATE_EMPLOYEE_ERROR
// DELETE_EMPLOYEE_SUCCESS
// DELETE_EMPLOYEE_ERROR
// CREATE_DUPLICATE_EMPLOYEE_ERROR
// EMPLOYEE_REMOVED_ALREADY