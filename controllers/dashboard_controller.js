import AvailableChoiceController from "./available_choice";
import ApiClient from "./api_client";

class DashboardController{
    /** @type {DashboardController} */
    static instance = null;
    apiClient;
    availableChoicesController;

    constructor() {
        this.apiClient = ApiClient.getInstance();
        this.availableChoicesController = new AvailableChoiceController(this.apiClient);
    }

    static getInstance() {
        if(DashboardController.instance == null) DashboardController.instance = new DashboardController();
        return DashboardController.instance;
    }
}

module.exports = DashboardController;