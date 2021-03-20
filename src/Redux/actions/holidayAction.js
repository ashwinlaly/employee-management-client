import { toast } from 'react-toastify';
import {history} from '../../Routes/history';
import {tokenExpired} from '../../Helpers/helpers';
import * as holidayTypes from '../actionTypes/holiday';
import holidayService from '../../Service/holidayService';

export const getAllHoliday = () => dispatch => {
    holidayService.getAllHoliday().then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: holidayTypes.LISTING_HOLIDAY_ERROR, payload: response.data})
        } else {
            dispatch({type: holidayTypes.LISTING_HOLIDAY_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: holidayTypes.LISTING_HOLIDAY_ERROR, payload: error}, dispatch)
    })
}

export const getOneHoliday = (_id) => dispatch => {
    holidayService.getOneHoliday(_id).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: holidayTypes.GET_HOLIDAY_ERROR, payload: response.data})
        } else {
            dispatch({type: holidayTypes.GET_HOLIDAY_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: holidayTypes.GET_HOLIDAY_ERROR, payload: error}, dispatch)
    })
}

export const deleteHoliday = (_id) => dispatch => {
    holidayService.deleteHoliday(_id).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: holidayTypes.DELETE_HOLIDAY_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: holidayTypes.DELETE_HOLIDAY_SUCCESS, payload: response})
        }
    }).catch(error => {
        tokenExpired(error, {type: holidayTypes.DELETE_HOLIDAY_ERROR, payload: error}, dispatch)
    })
}

export const createHoliday = (data) => dispatch => {
    holidayService.createHoliday(data).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: holidayTypes.CREATE_HOLIDAY_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: holidayTypes.CREATE_HOLIDAY_SUCCESS, payload: response})
            history.push("/home/holiday")
        }
    }).catch(error => {
        tokenExpired(error, {type: holidayTypes.CREATE_HOLIDAY_ERROR, payload: error}, dispatch)
    })
}

export const updateHoliday = (_id, data) => dispatch => {
    holidayService.updateHoliday(_id, data).then(response => {
        if(response.code === 422 || response.code === 206) {
            toast.error(response.message)
            dispatch({type: holidayTypes.UPDATE_HOLIDAY_ERROR, payload: response.data})
        } else {
            toast.success(response.message)
            dispatch({type: holidayTypes.UPDATE_HOLIDAY_SUCCESS, payload: response})
            history.push("/home/holiday")
        }
    }).catch(error => {
        tokenExpired(error, {type: holidayTypes.UPDATE_HOLIDAY_ERROR, payload: error}, dispatch)
    })
}
