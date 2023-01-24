import {formatDate, formattedDateToTZFormat} from "../helpers/dateFormatter";

class  WorkingExperience{
    constructor ({id, role, organization, startingDate, endingDate, accomplishments}) {
        this.id = id;
        this.role = role;
        this.organization = organization;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.accomplishments = accomplishments;
    }
    static empty(){
        return new WorkingExperience({
            id: null,
            role: "",
            organization: "",
            accomplishments: [],
            startingDate: "",
            endingDate: ""
        })
    }

    setStartingDate(date){
        let splitted = date.split("-");
        this.startingDate = `${splitted[2]}-${splitted[1]}-${splitted[0]}`
    }

    getStartingDate(){
        if(this.startingDate === null || this.startingDate === undefined || this.startingDate === "") return null;
        let splitted = this.startingDate.split("-");
        let year = splitted[2];
        let month = splitted[1];
        let day = splitted[0];

        if (month.length === 1) month = `0${month}`;
        if (day.length === 1) day = `0${day}`;
        return `${year}-${month}-${day}`;
    }

    setEndingDate(date){
        let splitted = date.split("-");
        this.endingDate = `${splitted[2]}-${splitted[1]}-${splitted[0]}`
    }

    getEndingDate(){
        if(this.endingDate === null|| this.endingDate === undefined || this.endingDate === "") return null;
        let splitted = this.endingDate.split("-");
        let year = splitted[2];
        let month = splitted[1];
        let day = splitted[0];

        if (month.length === 1) month = `0${month}`;
        if (day.length === 1) day = `0${day}`;
        return `${year}-${month}-${day}`;
    }

    static fromJson (json) {
        return new WorkingExperience({
            id: json.id,
            role: json.role,
            organization: json.organization,
            startingDate: formatDate(json.startingDate),
            endingDate: formatDate(json.endingDate),
            accomplishments: json.accomplishments
        })
    }

    toJson () {
        let s= formattedDateToTZFormat(this.startingDate);
        if(s === "") s = null;
        let e = formattedDateToTZFormat(this.endingDate);
        if(e === "") e = null;
        return {
            id: this.id,
            role: this.role,
            organization: this.organization,
            starting_date: s,
            ending_date: e,
            accomplishments: this.accomplishments
        }
    }
}

export default WorkingExperience;