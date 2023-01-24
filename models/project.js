import TechStackType from "./techstack_type";
import {formatDate, formattedDateToTZFormat} from "../helpers/dateFormatter";

class Project{
    constructor({id, title, coverImage, images, description, techStacks, liveLink, codeLink, readMoreLink, startingDate, endingDate}){
        this.id = id;
        this.title = title;
        this.coverImage = coverImage;
        this.images = images;
        this.description = description;
        this.techStacks = techStacks;
        this.liveLink = liveLink;
        this.codeLink = codeLink;
        this.readMoreLink = readMoreLink;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
    }

    setStartingDate(date){
        let splitted = date.split("-");
        this.startingDate = `${splitted[2]}-${splitted[1]}-${splitted[0]}`
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
        let splitted = date.split("-");
        this.endingDate = `${splitted[2]}-${splitted[1]}-${splitted[0]}`
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

    static fromJson(json){
        return new Project({
            id: json.id,
            title: json.title,
            coverImage: json.coverImage,
            images: json.images,
            description: json.description,
            techStacks: json.techStacks.map(TechStackType.fromJson),
            liveLink: json.liveLink,
            codeLink: json.codeLink,
            readMoreLink: json.readMoreLink,
            startingDate: formatDate(json.startingDate),
            endingDate: formatDate(json.endingDate)
        })
    }

    toJson(){
        let e = formattedDateToTZFormat(this.endingDate);
        if(e === "") e = null;
        return {
            id: this.id,
            title: this.title,
            cover_image: this.coverImage,
            images: this.images,
            description: this.description,
            tech_stacks_id: this.techStacks.map(t => t.id),
            tech_stacks: this.techStacks.map(t => t.toJson()),
            live_link: this.liveLink,
            code_link: this.codeLink,
            read_more_link: this.readMoreLink,
            starting_date: formattedDateToTZFormat(this.startingDate),
            ending_date: e
        }
    }

    static empty(){
        return new Project({
            id: null,
            title: "",
            coverImage: "",
            images: [],
            description: "",
            techStacks: [],
            liveLink: "",
            codeLink: "",
            readMoreLink: "",
            startingDate: "",
            endingDate: ""
        })
    }
}

export default Project;