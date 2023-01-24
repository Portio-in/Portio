import {
    FETCH_EXPERIENCE_ROUTE,
    FETCH_ALL_EXPERIENCE_ROUTE,
    UPDATE_EXPERIENCE_ROUTE,
    DELETE_EXPERIENCE_ROUTE,
    CREATE_EXPERIENCE_ROUTE
} from "../route"
import Experience from "../models/working_experience";

// TODO error
class ExperienceController{

    constructor(apiClient) {
        /** @type {ApiClient} */
        this.apiClient = apiClient;
    }

    async fetch_all(){
        const res = await this.apiClient.request('GET', FETCH_ALL_EXPERIENCE_ROUTE);
        if(res.success) {
            return res.data.map((e)=>Experience.fromJson(e));
        }else {
            return [];
        }
    }

    async fetch(id){
        const res = await this.apiClient.request('GET', FETCH_EXPERIENCE_ROUTE+"/"+id);
        if(res.success) {
            return Experience.fromJson(res.data);
        }else {
            return null;
        }
    }

    /**
     * @param {Experience} record
     * */
    async update(record){
        const res = await this.apiClient.request('PUT', UPDATE_EXPERIENCE_ROUTE+"/"+record.id, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: Experience.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    async create(record){
        const res = await this.apiClient.request('POST', CREATE_EXPERIENCE_ROUTE, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: Experience.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    async delete(record){
        const res = await this.apiClient.request('DELETE', DELETE_EXPERIENCE_ROUTE+"/"+record.id, record.toJson());
        if(res.success) {
            return true;
        }else {
            return false;
        }
    }
}

module.exports = ExperienceController;