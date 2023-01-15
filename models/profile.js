import TechStackType from "./techstack_type";
import {Template} from "next/dist/compiled/webpack/webpack";

class Profile{
    constructor({id, name, email, phone, avatar, tagline, description, techStacks, activeTemplate}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar;
        this.tagline = tagline;
        this.description = description;
        this.techStacks = techStacks;
        this.activeTemplate = activeTemplate;
    }

    // TODO update tagline
    static fromJson(json){
        return new Profile({
            id: json.id,
            name: json.name,
            email: json.email,
            phone: json.phone,
            avatar: json.avatar,
            tagline: "",
            description: json.description,
            techStacks: json.techStacks.map((e)=>TechStackType.fromJson(e)),
            activeTemplate: Template.fromJson(json.activeTemplate)
        })
    }

    toJson({forUpdate=false}){
        let data = {
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
            avatar: this.avatar,
            tagline: this.tagline,
            description: this.description,
            techStacks: this.techStacks.map((e)=>e.toJson()),
            activeTemplate: this.activeTemplate.toJson()
        };
        if(forUpdate){
            delete data.email;
            delete data.techStacks;
            delete data.activeTemplate;
        }
        return data;
    }
}

export default Profile;