import * as userTypes from '../actionTypes/user';

export default (state = {}, action) => {
    switch (action.type) {
        case userTypes.USER_LOGIN_SUCCESS:
            return {...state}
        case userTypes.GET_EMPLOYEE_ERROR:
            return {...state, user: [], errormessage: action.payload.message}
        case userTypes.GET_EMPLOYEE_SUCCESS:
            return {...state, user: action.payload.data, successmessage: action.payload.message}
        case userTypes.LISTING_EMPLOYEE_ERROR:
            return {...state, users: [], errormessage: action.payload.message}
        case userTypes.LISTING_EMPLOYEE_SUCCESS:
            return { ...state, users: action.payload}
        default:
            return state
    }
}