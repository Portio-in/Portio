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
        return new Certificate({
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
            referenceLink: this.referenceLink,
            date: formattedDateToTZFormat(this.date)
        }
    }

    isDescriptionBlank(){
        return this.description === undefined || this.description === null
    }

    isReferenceLinkBlank(){
        return this.referenceLink === undefined || this.referenceLink === null
    }

    validate(){
        return this.isDescriptionBlank() && this.isReferenceLinkBlank() && isBlank(this.title);
    }
}

export default Achievement;