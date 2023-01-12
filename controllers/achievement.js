import {
    FETCH_ACHIEVEMENT_ROUTE,
    FETCH_ALL_ACHIEVEMENTS_ROUTE,
    UPDATE_ACHIEVEMENT_ROUTE,
    DELETE_ACHIEVEMENT_ROUTE,
    CREATE_ACHIEVEMENT_ROUTE
} from "../route"
import Achievement from "../models/achievement";

// TODO error
class AchievementController{

    constructor(apiClient) {
        /** @type {ApiClient} */
        this.apiClient = apiClient;
    }

    async fetch_all(){
        const res = await this.apiClient.request('GET', FETCH_ALL_ACHIEVEMENTS_ROUTE);
        if(res.success) {
            return res.data.map((e)=>Achievement.fromJson(e));
        }else {
            console.log("Available choice template AchievementController : "+res.message)
            return [];
        }
    }

    async fetch(id){
        const res = await this.apiClient.request('GET', FETCH_ACHIEVEMENT_ROUTE+"/"+id);
        if(res.success) {
            return Achievement.fromJson(res.data);
        }else {
            console.log("Available choice template AchievementController : "+res.message)
            return null;
        }
    }

    /**
     * @param {Achievement} record
     * */
    async update(record){
        const res = await this.apiClient.request('PUT', UPDATE_ACHIEVEMENT_ROUTE+"/"+record.id, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: Achievement.fromJson(res.data)
            };
        }else {
            console.log("AchievementController : "+res.message)
            return {
                success: false,
                record: null
            };
        }
    }

    async create(record){
        const res = await this.apiClient.request('POST', CREATE_ACHIEVEMENT_ROUTE, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: Achievement.fromJson(res.data)
            };
        }else {
            console.log("AchievementController : "+res.message)
            return {
                success: false,
                record: null
            };
        }
    }

    async delete(record){
        const res = await this.apiClient.request('DELETE', DELETE_ACHIEVEMENT_ROUTE+"/"+record.id, record.toJson());
        if(res.success) {
            return true;
        }else {
            console.log("AchievementController : "+res.message)
            return false;
        }
    }
}

module.exports = AchievementController;