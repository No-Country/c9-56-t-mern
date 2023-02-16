import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { API_URL_PAWFUL } = getEnvVariables()
// const url = process.env.API_URL_PAWFUL;

const pawfulApi = axios.create({

    // baseURL: `${API_URL_PAWFUL}`
    baseURL: "http://localhost:3000/api"
})

pawfulApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config;
})

export default pawfulApi;

