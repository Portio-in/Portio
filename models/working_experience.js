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
        let e = formattedDateToTZFormat(this.endingDate);
        if(e === "") e = null;
        return {
            id: this.id,
            role: this.role,
            organization: this.organization,
            startingDate: formattedDateToTZFormat(this.startingDate),
            endingDate: e,
            accomplishments: this.accomplishments
        }
    }
}

export default WorkingExperience;