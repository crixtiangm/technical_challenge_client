import axios from 'axios';

const _api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005/api",
    timeout:5000
});

export default _api;