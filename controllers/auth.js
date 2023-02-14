import {
    LOGIN_EMAIL_ROUTE,
    SIGNUP_EMAIL_ROUTE
} from "../route";
import ApiClient from "./api_client";

class AuthController {
    constructor(apiClient) {
        /** @type {ApiClient} */
        this.apiClient = apiClient;
    }

    async login(email){
        const res = await this.apiClient.request('POST', LOGIN_EMAIL_ROUTE, { email: email });
        if(res.success) {
            return {
                success: res.data.success,
                message: res.data.message
            };
        }else {
            return {
                success: false,
                message: res.message
            };
        }
    }

    async signup(email, name){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
            return {
                success: false,
                message: "Email is invalid"
            };
        }
        const res = await this.apiClient.request('POST', SIGNUP_EMAIL_ROUTE, { email: email, name: name });
        if(res.success) {
            return {
                success: res.data.success,
                message: res.data.message
            };
        }else {
            return {
                success: false,
                message: "Unexpected Error"
            };
        }
    }
}

module.exports = AuthController;