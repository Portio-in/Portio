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
            course_name: this.courseName,
            institution_name: this.institutionName,
            score: this.score,
            subjects: this.subjects,
            starting_date: formattedDateToTZFormat(this.startingDate),
            ending_date: e
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

    setStartingDate(date){
        let splitted = date.split("-");
        this.startingDate = `${splitted[2]}-${splitted[1]}-${splitted[0]}`;
    }

    getStartingDate(){
        let splitted = this.startingDate.split("-");
        let year = splitted[2];
        let month = splitted[1];
        let day = splitted[0];

        if (month.length === 1) month = `0${month}`;
        if (day.length === 1) day = `0${day}`;
        return `${year}-${month}-${day}`;
    }

    setEndingDate(date){
        try {
            let splitted = date.split("-");
            this.endingDate = `${splitted[2]}-${splitted[1]}-${splitted[0]}`;
        }catch (e) {
            this.endingDate = "";
        }
    }

    getEndingDate(){
        let splitted = this.endingDate.split("-");
        let year = splitted[2];
        let month = splitted[1];
        let day = splitted[0];

        if (month.length === 1) month = `0${month}`;
        if (day.length === 1) day = `0${day}`;
        return `${year}-${month}-${day}`;
    }

    getEndingDate(){
        if(this.endingDate === null || this.endingDate === undefined || this.endingDate === "") return "Present";
        return this.endingDate;
    }

    validate(){
        return isBlank(this.courseName) && isBlank(this.institutionName) && isBlank(this.startingDate);
    }

    static empty(){
        return new Education({
            id: null,
            courseName: "",
            institutionName: "",
            score: "",
            subjects: [],
            startingDate: null,
            endingDate: null
        })
    }
}

export default Education;