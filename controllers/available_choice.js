import { FETCH_AVAILABLE_TEMPLATE_ROUTE, FETCH_AVAILABLE_TECHSTACKS_ROUTE, FETCH_AVAILABLE_SOCIAL_LINK_TYPES_ROUTE } from "../route"
import PortfolioTemplate from "../models/portfolio_template";
import TechStackType from "../models/techstack_type";
import SocialLink from "../models/social_link";

// TODO error
class AvailableChoiceController{

    constructor(apiClient) {
        /** @type {ApiClient} */
        this.apiClient = apiClient;
    }
    async fetch_templates(){
        console.log("fetching templates");
        const res = await this.apiClient.request('GET', FETCH_AVAILABLE_TEMPLATE_ROUTE);
        if(res.success) {
            return res.data.map((e)=>PortfolioTemplate.fromJson(e));
        }else {
            console.log("Available choice template Controller : "+res.message)
            return [];
        }
    }
    async fetch_techStacks(){
        const res = await this.apiClient.request('GET', FETCH_AVAILABLE_TECHSTACKS_ROUTE);
        if(res.success) {
            return res.data.map((e)=>TechStackType.fromJson(e));
        }else {
            console.log("Available choice tech stack Controller : "+res.message)
            return [];
        }
    }
    async fetch_socialLinkTypes(){
        const res = await this.apiClient.request('GET', FETCH_AVAILABLE_SOCIAL_LINK_TYPES_ROUTE);
        if(res.success) {
            return res.data.map((e)=>SocialLink.fromJson(e));
        }else {
            console.log("Available choice social link Controller : "+res.message)
            return [];
        }
    }
}

module.exports = AvailableChoiceController;