import * as userTypes from '../actionTypes/user';

export default (state = {}, action) => {
    switch (action.type) {
        case userTypes.USER_LOGIN_SUCCESS:
            return {...state, isAdmin: action.payload.data.isAdmin}
        case userTypes.GET_EMPLOYEE_ERROR:
            return {...state, users: [], errormessage: action.payload.message, successmessage: '', currentUser: null}
        case userTypes.GET_EMPLOYEE_SUCCESS:            
            return {...state, currentUser: action.payload.data, successmessage: action.payload.message, errormessage: ''}
        case userTypes.LISTING_EMPLOYEE_ERROR:
            return {...state, users: [], errormessage: action.payload.message, successmessage: '', currentUser: null}
        case userTypes.LISTING_EMPLOYEE_SUCCESS:
            return { ...state, users: action.payload, successmessage: action.payload.message, errormessage: '', currentUser: null}
        case userTypes.DELETE_EMPLOYEE_SUCCESS:
            return { ...state, users: action.payload.data, successmessage: action.payload.message, errormessage: '', currentUser: null}

        case userTypes.USER_LEAVE_APPROVED_ERROR:
            return {...state, errormessage: action.payload.message, successmessage: ''}
        case userTypes.USER_LEAVE_APPROVED_SUCCESS:
            return { ...state, successmessage: action.payload.message, leaves: action.payload.data}
        case userTypes.GET_USER_LEAVE_FOR_LISTING_ERROR:
            return {...state, errormessage: action.payload.message, successmessage: '', leaves: []}
        case userTypes.GET_USER_LEAVE_FOR_LISTING_SUCCESS:
            return { ...state, successmessage: action.payload.message, leaves: action.payload.data}
        case userTypes.GET_ALL_USER_LEAVE_FOR_LISTING_ERROR:
            return {...state, errormessage: action.payload.message, successmessage: '', leaves: []}
        case userTypes.GET_ALL_USER_LEAVE_FOR_LISTING_SUCCESS:
            return { ...state, successmessage: action.payload.message, leaves: action.payload.data}
        default:
            return state
    }
}