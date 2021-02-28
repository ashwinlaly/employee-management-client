import axios from 'axios';
const BASE_URL = "http://localhost:5000/api"
// https://employee-leave-management321.herokuapp.com/api

const config = () => {
    let token = window.localStorage.getItem("jwt");
    token = JSON.parse(token)
    let config = {}
    if(token !== null)
        config = {
            headers : {'Authorization': 'Bearer '+token.access_token}
    }
    return config;
}

const responseBody = res => res.data;

const request = {
    get : async (url) => {
        let configuration = await config()
        return await axios.get(`${BASE_URL}${url}`, configuration).then(responseBody)
    },
    post : async (url, data) => {
        let configuration = await config()
        return await axios.post(`${BASE_URL}${url}`, data, configuration).then(responseBody)
    },
    patch : async (url, data) => {
        let configuration = await config()
        return await axios.patch(`${BASE_URL}${url}`, data, configuration).then(responseBody)
    },
    delete : async (url) => {
        let configuration = await config()
        return await axios.delete(`${BASE_URL}${url}`, configuration).then(responseBody)
    },
}

export default request;