import request from './API';

const userService = {
    signin : (data) => {
        return request.post("/signin", data)
    },
    createUser : (data) => {
        return request.post("/user", data)
    },
    getUser: (_id) => {
        return request.get(`/user/${_id}`)
    },
    getUsers: () => {
        return request.get(`/user`)
    },
    deleteUser : (_id) => {
        return request.delete(`/user/${_id}`)
    },
    updateUser: (_id, data) => {
        return request.patch(`/user/${_id}`, data)
    }
}

export default userService;