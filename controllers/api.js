import axios from "axios";
import {BASE_API_URL} from  "../config";


class ApiClient{
    static instance = null;
    static axiosClient = null;
    static #token = "";
    constructor() {
        if(ApiClient.instance != null) return ApiClient.instance;
        ApiClient.instance = this;
        ApiClient.axiosClient = axios;
    }

    setToken(token){
        if(!token) return false;
        ApiClient.#token = token;
        return true;
    }

    // route will always start with / and dont ends with /
    async request(method, route, body={}){
        if(!["get", "put", "post", "delete", "patch"].includes(method.toLowerCase())) {
            return {
                success: false,
                message: "Invalid method",
                data: null
            }
        }
        const config = {
            method: method.toLowerCase(),
            url: `${BASE_API_URL}${route}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ApiClient.#token
            },
            data: JSON.stringify(body)
        }
        try{
            let res = await ApiClient.axiosClient(config);
            return {
                success: true,
                message: "Success",
                data: res.data
            }
        }catch (e) {
            return {
                success: false,
                message: e.message,
                data: null
            }
        }
    }

}

export default ApiClient;