import request from './API';
const HOLIDAY = 'holiday'

export default {
    getAllHoliday : () => {
        return request.get(`/${HOLIDAY}/`)
    },
    getOneHoliday : (_id) => {
        return request.get(`/${HOLIDAY}/${_id}`)
    },
    deleteHoliday : (_id) => {
        return request.delete(`/${HOLIDAY}/${_id}`)
    },
    createHoliday : (data) => {
        return request.post(`/${HOLIDAY}/`, data)
    },
    updateHoliday : (_id, data) => {
        return request.patch(`/${HOLIDAY}/${_id}`, data)
    }
}