import axios from "axios";

let config = {
    baseURL: "https://konega-node-book-app.herokuapp.com/api",
    //baseURL: "/api/v1/",
    //timeout: 60 * 1000, // Timeout
    //withCredentials: true, // Check cross-site Access-Control
    //headers: { 'Authorization': 'Bearer ' + localStorage.getItem('auth_token'), "X-Requested-With": "XMLHttpRequest" }
};

const _axios = axios.create(config);

//module.exports = axiosInstance;
export default _axios;