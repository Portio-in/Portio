import AvailableChoiceController from "./available_choice";
import ApiClient from "./api_client";
import AchievementController from "./achievement";
import CertificateController from  "./certificate";
import EducationController from "./education";

class GlobalController{
    /** @type {GlobalController} */
    static instance = null;
    apiClient;
    availableChoicesController;

    constructor() {
        this.apiClient = ApiClient.getInstance();
        this.availableChoicesController = new AvailableChoiceController(this.apiClient);
        this.achievementController = new AchievementController(this.apiClient);
        this.certificateController = new CertificateController(this.apiClient);
        this.educationController = new EducationController(this.apiClient);
    }

    static getInstance() {
        if(GlobalController.instance == null) GlobalController.instance = new GlobalController();
        return GlobalController.instance;
    }
}

module.exports = GlobalController;