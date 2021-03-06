import request from './API';

const userService = {
    getUsers: () => {
        return request.get(`/employee`)
    },
    signin : (data) => {
        return request.post("/signin", data)
    },
    createUser : (data) => {
        return request.post("/employee", data)
    },
    getUser: (_id) => {
        return request.get(`/employee/${_id}`)
    },
    deleteUser : (_id) => {
        return request.delete(`/employee/`, _id)
    },
    updateUser: (_id, data) => {
        return request.patch(`/employee/${_id}`, data)
    },
    updatePassword: (data) => {
        return request.post(`/profile/password/`, data)
    },
    applyLeave: (data) => {
        return request.post(`/leave/request`, data)
    },
    getuserLeave: () => {
        return request.get(`/leave/history`)
    },
    getAllUserLeave: () => {
        return request.get(`/leave/history/all`)
    },
    approveLeave: (data) => {
        return request.post(`/leave/approve`, data)
    }
}

export default userService;