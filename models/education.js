import isBlank from "../helpers/isBlank";
import {formatDate, formattedDateToTZFormat} from "../helpers/dateFormatter";


class Education{
    constructor({id, courseName, institutionName, score, subjects, startingDate, endingDate}){
        this.id = id;
        this.courseName = courseName;
        this.institutionName = institutionName;
        this.score = score;
        this.subjects = subjects;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
    }

    static fromJson(json){
        return new Education({
            id: json.id,
            courseName: json.courseName,
            institutionName: json.institutionName,
            score: json.score,
            subjects: json.subjects,
            startingDate: formatDate(json.startingDate),
            endingDate: formatDate(json.endingDate)
        })
    }

    toJson(){
        let e = formattedDateToTZFormat(this.endingDate);
        if(e === "") e = null;
        return {
            id: this.id,
            courseName: this.courseName,
            institutionName: this.institutionName,
            score: this.score,
            subjects: this.subjects,
            startingDate: formattedDateToTZFormat(this.startingDate),
            endingDate: e
        }
    }

    addSubject(subject){
        this.subjects.push(subject);
    }

    removeSubject(subject){
        let index = this.subjects.indexOf(subject);
        if(index > -1){
            this.subjects.splice(index, 1);
        }
    }

    validate(){
        return isBlank(this.courseName) && isBlank(this.institutionName) && isBlank(this.startingDate);
    }
}

export default Education;