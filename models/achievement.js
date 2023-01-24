import {formatDate, formattedDateToTZFormat} from '../helpers/dateFormatter';
import isBlank from "../helpers/isBlank";

class Achievement{
    constructor({id, title, description, referenceLink, date}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.referenceLink = referenceLink;
        this.date = date;
    }
    static fromJson(json){
        return new Achievement({
            id: json.id,
            title: json.title,
            description: json.description ? json.description : "",
            referenceLink: json.referenceLink ? json.referenceLink : "",
            date: formatDate(json.date)
        })
    }

    toJson(){
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            reference_link: this.referenceLink,
            date: formattedDateToTZFormat(this.date)
        }
    }

    isDescriptionBlank(){
        return this.description === undefined || this.description === null
    }

    isReferenceLinkBlank(){
        return this.referenceLink === undefined || this.referenceLink === null
    }


    setDate(date){
        let splitted = date.split("-");
        this.date = `${splitted[2]}-${splitted[1]}-${splitted[0]}`
    }

    getDate(){
        let splitted = this.date.split("-");
        let year = splitted[2];
        let month = splitted[1];
        let day = splitted[0];

        if (month.length === 1) month = `0${month}`;
        if (day.length === 1) day = `0${day}`;
        return `${year}-${month}-${day}`;
    }

    validate(){
        return this.isDescriptionBlank() && this.isReferenceLinkBlank() && isBlank(this.title);
    }

    static empty(){
        return new Achievement({
            id: null,
            title: "",
            description: "",
            referenceLink: "",
            date: formatDate(new Date())
        })
    }
}

export default Achievement;