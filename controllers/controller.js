import AvailableChoiceController from "./available_choice";
import ApiClient from "./api_client";
import AchievementController from "./achievement";
import CertificateController from  "./certificate";
import EducationController from "./education";
import SocialLinkController from "./social_link";
import ProfileController from "./profile";

import Profile from "../models/profile";

class GlobalController{
    /** @type {GlobalController} */
    static instance = null;
    apiClient;
    availableChoicesController;
    static profile = null; /** @type {Profile} */

    constructor() {
        this.apiClient = ApiClient.getInstance();
        this.availableChoicesController = new AvailableChoiceController(this.apiClient);
        this.achievementController = new AchievementController(this.apiClient);
        this.certificateController = new CertificateController(this.apiClient);
        this.educationController = new EducationController(this.apiClient);
        this.socialLinkController = new SocialLinkController(this.apiClient);
        this.profileController = new ProfileController(this.apiClient);
    }

    static async fetchProfile(ignore_cache = false){
        if(GlobalController.profile != null && ignore_cache===false) return GlobalController.profile;
        GlobalController.profile = await GlobalController.getInstance().profileController.fetch();
        return GlobalController.profile;
    }

    static getInstance() {
        if(GlobalController.instance == null) GlobalController.instance = new GlobalController();
        return GlobalController.instance;
    }
}

module.exports = GlobalController;