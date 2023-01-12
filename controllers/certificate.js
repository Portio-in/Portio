import {
    FETCH_CERTIFICATE_ROUTE,
    FETCH_ALL_CERTIFICATES_ROUTE,
    UPDATE_CERTIFICATE_ROUTE,
    DELETE_CERTIFICATE_ROUTE,
    CREATE_CERTIFICATE_ROUTE
} from "../route"
import Certificate from "../models/certificate";

// TODO error
class CertificateController{

    constructor(apiClient) {
        /** @type {ApiClient} */
        this.apiClient = apiClient;
    }

    async fetch_all(){
        const res = await this.apiClient.request('GET', FETCH_ALL_CERTIFICATES_ROUTE);
        if(res.success) {
            return res.data.map((e)=>Certificate.fromJson(e));
        }else {
            return [];
        }
    }

    async fetch(id){
        const res = await this.apiClient.request('GET', FETCH_CERTIFICATE_ROUTE+"/"+id);
        if(res.success) {
            return Certificate.fromJson(res.data);
        }else {
            return null;
        }
    }

    /**
     * @param {Certificate} record
     * */
    async update(record){
        const res = await this.apiClient.request('PUT', UPDATE_CERTIFICATE_ROUTE+"/"+record.id, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: Certificate.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    async create(record){
        const res = await this.apiClient.request('POST', CREATE_CERTIFICATE_ROUTE, record.toJson());
        if(res.success) {
            return {
                success: true,
                record: Certificate.fromJson(res.data)
            };
        }else {
            return {
                success: false,
                record: null
            };
        }
    }

    async delete(record){
        const res = await this.apiClient.request('DELETE', DELETE_CERTIFICATE_ROUTE+"/"+record.id, record.toJson());
        return !!res.success;
    }
}

module.exports = CertificateController;