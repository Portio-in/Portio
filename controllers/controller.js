import AvailableChoiceController from "./available_choice";
import ApiClient from "./api_client";
import AchievementController from "./achievement";

class GlobalController{
    /** @type {GlobalController} */
    static instance = null;
    apiClient;
    availableChoicesController;

    constructor() {
        this.apiClient = ApiClient.getInstance();
        this.availableChoicesController = new AvailableChoiceController(this.apiClient);
        this.achievementController = new AchievementController(this.apiClient);
    }

    static getInstance() {
        if(GlobalController.instance == null) GlobalController.instance = new GlobalController();
        return GlobalController.instance;
    }
}

module.exports = GlobalController;