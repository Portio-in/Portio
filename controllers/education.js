import {
    FETCH_EDUCATION_ROUTE,
    FETCH_ALL_EDUCATIONS_ROUTE,
    UPDATE_EDUCATION_ROUTE,
    DELETE_EDUCATION_ROUTE,
    CREATE_EDUCATION_ROUTE
} from "../route"
import Education from "../models/education";

// TODO error
class EducationController{

    constructor(apiClient) {
        /** @type {ApiClient} */
        this.apiClient = apiClient;
    }

    async fetch_all(){
        const res = await this.apiClient.request('GET', FETCH_ALL_EDUCATIONS_ROUTE);
        if(res.success) {
            return res.data.map((e)=>Education.fromJson(e));
        }else {
            return [];
        }
    }

    async fetch(id){
        const res = await this.apiClient.request('GET', FETCH_EDUCATION_ROUTE+"/"+id);
        if(res.success) {
            return Education.fromJson(res.data);
        }else {
            return null;
        }
    }

    /**
     * @param {Education} record
     * */
    async update(record){
        const res = await this.apiClient.request('PUT', UPDATE_EDUCATION_ROUTE+"/"+record.id, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: Education.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    async create(record){
        const res = await this.apiClient.request('POST', CREATE_EDUCATION_ROUTE, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: Education.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    async delete(record){
        const res = await this.apiClient.request('DELETE', DELETE_EDUCATION_ROUTE+"/"+record.id, record.toJson());
        if(res.success) {
            return true;
        }else {
            return false;
        }
    }
}

module.exports = EducationController;