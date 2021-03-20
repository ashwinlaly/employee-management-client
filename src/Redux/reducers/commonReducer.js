import * as userTypes from '../actionTypes/user';
import * as commonTypes from '../actionTypes/common';

const INITIAL_STATE = {
    token : null,
    message : '',
    statues : [{"name": "Active", _id: true} , {"name": "InActive", _id: false}]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case commonTypes.LOGOUT:
            window.localStorage.removeItem("jwt")
            return {...state, redirectTo : "/", token : null, currectUser : null,successmessage: "USER LOGOUT SUCCESS"}
        case commonTypes.APP_LOAD:
            return {...state, currectUser : action.payload ? action.payload.user : null,  appLoaded: true }
        case commonTypes.REDIRECT:
            return {...state, redirectTo : null}
        case commonTypes.TOKEN_EXPIRED:
            return {...state, redirectTo : "/", token : null, currectUser : null,errormessage: "Token expired, Login Again."}
        case commonTypes.SETTINGS_SAVED:
            return {...state}
        case userTypes.USER_LOGIN_ERROR:
            return {...state, token: null, errormessage: action.payload.message, errors: action.payload.error}
        case userTypes.USER_LOGIN_SUCCESS:
            let {counts} = action.payload.data
            return {...state, token: action.payload.data.access_token, refresh_token: action.payload.data.refresh_token, successmessage: action.payload.message, errormessage: '', errors: '', counts}
        default:
            return state
    }
}