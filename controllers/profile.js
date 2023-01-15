import {
    FETCH_PROFILE_ROUTE,
    UPDATE_PROFILE_ROUTE,
    UPDATE_DOMAIN_ROUTE,
    UPDATE_PORTFOLIO_TEMPLATE_ROUTE
} from "../route"
import SocialLink from "../models/social_link";
import Profile from "../models/profile";

class ProfileController{

    constructor(apiClient) {
        /** @type {ApiClient} */
        this.apiClient = apiClient;
    }


    async fetch(){
        const res = await this.apiClient.request('GET', FETCH_PROFILE_ROUTE);
        if(res.success) {
            return Profile.fromJson(res.data);
        }else {
            return null;
        }
    }

    /**
     * @param {Profile} record
     * */
    async update(record){
        const res = await this.apiClient.request('PUT', UPDATE_PROFILE_ROUTE, record.toJson({
            forUpdate: true
        }));
        if(res.success) {
            return {
                success: true,
                record: Profile.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    /**
     * @param {String} domain
     * **/
    async updateDomain(domain){
        const res = await this.apiClient.request('PATCH', UPDATE_DOMAIN_ROUTE, {
            domain: domain
        });
        if(res.success) {
            return {
                success: true,
                record: Profile.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    /***
     * @param {String} template_id
     * */
    async updatePortfolioTemplate(template_id){
        const res = await this.apiClient.request('PATCH', UPDATE_PORTFOLIO_TEMPLATE_ROUTE, {
            template_id: template_id
        });
        if(res.success) {
            return {
                success: true,
                record: Profile.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }
}

module.exports = ProfileController;