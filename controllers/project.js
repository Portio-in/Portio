import {
    FETCH_PROJECT_ROUTE,
    FETCH_ALL_PROJECTS_ROUTE,
    UPDATE_PROJECT_ROUTE,
    DELETE_PROJECT_ROUTE,
    CREATE_PROJECT_ROUTE
} from "../route"
import Project from "../models/project";

class ProjectController{

    constructor(apiClient) {
        /** @type {ApiClient} */
        this.apiClient = apiClient;
    }

    async fetch_all(){
        const res = await this.apiClient.request('GET', FETCH_ALL_PROJECTS_ROUTE);
        if(res.success) {
            return res.data.map((e)=>Project.fromJson(e));
        }else {
            return [];
        }
    }

    async fetch(id){
        const res = await this.apiClient.request('GET', FETCH_PROJECT_ROUTE+"/"+id);
        if(res.success) {
            return Project.fromJson(res.data);
        }else {
            return null;
        }
    }

    /**
     * @param {Project} record
     * */
    async update(record){
        const res = await this.apiClient.request('PUT', UPDATE_PROJECT_ROUTE+"/"+record.id, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: Project.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    async create(record){
        const res = await this.apiClient.request('POST', CREATE_PROJECT_ROUTE, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: Project.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    async delete(record){
        const res = await this.apiClient.request('DELETE', DELETE_PROJECT_ROUTE+"/"+record.id, record.toJson());
        if(res.success) {
            return true;
        }else {
            return false;
        }
    }
}

module.exports = ProjectController;