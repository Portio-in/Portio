import TechStackType from "./techstack_type";

class Profile{
    constructor({id, name, email, phone, avatar, tagline, description, techStacks}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar;
        this.tagline = tagline;
        this.description = description;
        this.techStacks = techStacks;
    }

    static fromJson(json){
        return new Profile({
            id: json.id,
            name: json.name,
            email: json.email,
            phone: json.phone,
            avatar: json.avatar,
            tagline: json.tagline,
            description: json.description,
            techStacks: json.techStacks.map((e)=>TechStackType.fromJson(e))
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
            techStacks: this.techStacks.map((e)=>e.toJson())
        };
        if(forUpdate){
            delete data.email;
            delete data.techStacks;
        }
        return data;
    }
}

export default Profile;