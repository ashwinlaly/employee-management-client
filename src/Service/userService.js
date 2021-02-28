import request from './API';

const userService = {
    signin : (data) => {
        return request.post("/signin", data)
    },
    createUser : (data) => {
        return request.post("/employee", data)
    },
    getUser: (_id) => {
        return request.get(`/employee/${_id}`)
    },
    getUsers: () => {
        return request.get(`/employee`)
    },
    deleteUser : (_id) => {
        return request.delete(`/employee/${_id}`)
    },
    updateUser: (_id, data) => {
        return request.patch(`/employee/${_id}`, data)
    }
}

export default userService;