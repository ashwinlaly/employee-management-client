import request from './API';
const _DEPARTMENT = "department"

export default {
    getDepartment : (_id) => {
        return request.get(`/${_DEPARTMENT}/${_id}`, _id)
    },
    getDepartments : () => {
        return request.get(`/${_DEPARTMENT}/`)
    },
    createDepartment : (data) => {
        return request.post(`/${_DEPARTMENT}/`, data)
    },
    patchDepartment : (_id, data) => {
        return request.patch(`/${_DEPARTMENT}/${_id}`, data)
    },
    deleteDepartment : (_id) => {
        return request.delete(`/${_DEPARTMENT}/`, _id)
    }
}