import {
    FETCH_SOCIAL_LINK_ROUTE,
    FETCH_ALL_SOCIAL_LINKS_ROUTE,
    UPDATE_SOCIAL_LINK_ROUTE,
    DELETE_SOCIAL_LINK_ROUTE,
    CREATE_SOCIAL_LINK_ROUTE
} from "../route"
import SocialLink from "../models/social_link";

class SocialLinkController{

    constructor(apiClient) {
        /** @type {ApiClient} */
        this.apiClient = apiClient;
    }

    async fetch_all(){
        const res = await this.apiClient.request('GET', FETCH_ALL_SOCIAL_LINKS_ROUTE);
        if(res.success) {
            return res.data.map((e)=>SocialLink.fromJson(e));
        }else {
            return [];
        }
    }

    async fetch(id){
        const res = await this.apiClient.request('GET', FETCH_SOCIAL_LINK_ROUTE+"/"+id);
        if(res.success) {
            return SocialLink.fromJson(res.data);
        }else {
            return null;
        }
    }

    /**
     * @param {SocialLink} record
     * */
    async update(record){
        const res = await this.apiClient.request('PUT', UPDATE_SOCIAL_LINK_ROUTE+"/"+record.id, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: SocialLink.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    async create(record){
        const res = await this.apiClient.request('POST', CREATE_SOCIAL_LINK_ROUTE, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: SocialLink.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    async delete(record){
        const res = await this.apiClient.request('DELETE', DELETE_SOCIAL_LINK_ROUTE+"/"+record.id, record.toJson());
        return !!res.success;
    }
}

module.exports = SocialLinkController;