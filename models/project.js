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
            coverImage: this.coverImage,
            images: this.images,
            description: this.description,
            techStacks: this.techStacks.map(t => t.toJson()),
            liveLink: this.liveLink,
            codeLink: this.codeLink,
            readMoreLink: this.readMoreLink,
            startingDate: formattedDateToTZFormat(this.startingDate),
            endingDate: e
        }
    }
}

export default Project;