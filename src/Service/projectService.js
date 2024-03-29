import request from './API';
const _PROJECT = "project";

const projectService = {
    getProjects: () => {
        return request.get(`/${_PROJECT}`)
    },
    getProject: (_id) => {
        return request.get(`/${_PROJECT}/${_id}`)
    },
    createProject: (data) => {
        return request.post(`/${_PROJECT}`, data)
    },
    updateProect: (_id, data) => {
        return request.patch(`/${_PROJECT}/${_id}`,data)
    },
    deleteProject: (_id) => {
        return request.delete(`/${_PROJECT}/`, _id)
    }
}


export default projectService;