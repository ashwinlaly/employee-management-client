import { toast } from 'react-toastify';
import {history} from '../Routes/history';
import * as commonTypes from '../Redux/actionTypes/common';

export const tokenExpired = (error, actionType, dispatch) => {
    if(error.response) {
        if(error.response.status === 403) {
            window.localStorage.removeItem("jwt")
            dispatch({type: commonTypes.TOKEN_EXPIRED})
            history.push("/")
        } else {
            toast.error(actionType.type)
            dispatch(actionType)
        }
    } else {
        toast.error(commonTypes.SERVER_STATUS)
    }
}