import request from './API';
const _PROJECT = "projects";

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
    updateProect: (data, _id) => {
        return request.patch(`/${_PROJECT}/${_id}`,data)
    },
    deleteProject: (_id) => {
        return request.get(`/${_PROJECT}/${_id}`)
    }
}


export default projectService;