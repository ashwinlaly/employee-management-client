import axios from 'axios';
const BASE_URL = "https://employee-leave-management321.herokuapp.com/api"

// let token = null;
// const tokenPlugin = req => {
//   if (token) {
    //   }
// }
const responseBody = res => res.data;

const request = {
    get : async (url) => {
        return await axios.get(`${BASE_URL}${url}`).then(responseBody)
    },
    post : async (url, data) => {
        return await axios.post(`${BASE_URL}${url}`, data).then(responseBody)
    },
    patch : async (url, data) => {
        return await axios.patch(`${BASE_URL}${url}`, data).then(responseBody)
    },
    delete : async (url) => {
        return await axios.delete(`${BASE_URL}${url}`).then(responseBody)
    },
}

export default request;