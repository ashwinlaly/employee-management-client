import * as holidayTypes from '../actionTypes/holiday';

const INITIAL_STATE = {
    total_holiday : 20,
    holidays : []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case holidayTypes.LISTING_HOLIDAY_ERROR:
            return {...state, holidays: [], errormessage: action.payload.message, successmessage: ''}
        case holidayTypes.LISTING_HOLIDAY_SUCCESS:
            return {...state, holidays: action.payload.data, errormessage: '', successmessage: action.payload.message}
        case holidayTypes.GET_HOLIDAY_ERROR:
            return {...state, currentHoliday: null, errormessage: action.payload.message, successmessage: ''}
        case holidayTypes.GET_HOLIDAY_SUCCESS:
            return {...state, currentHoliday: action.payload.data, errormessage: '', successmessage: action.payload.message}
        case holidayTypes.DELETE_HOLIDAY_ERROR:
            return {...state, errormessage: action.payload.message, successmessage: ''}
        case holidayTypes.DELETE_HOLIDAY_SUCCESS:
            return {...state, holidays: action.payload.data, errormessage: '', successmessage: action.payload.message}
        case holidayTypes.CREATE_HOLIDAY_ERROR:
            return {...state, errormessage: action.payload.message, successmessage: ''}
        case holidayTypes.CREATE_HOLIDAY_SUCCESS:
            return {...state, errormessage: '', successmessage: action.payload.message}
        case holidayTypes.UPDATE_HOLIDAY_ERROR:
            return {...state, errormessage: action.payload.message, successmessage: ''}
        case holidayTypes.UPDATE_HOLIDAY_SUCCESS:
            return {...state, errormessage: '', successmessage: action.payload.message}
        default:
            return {...state}
    }
}