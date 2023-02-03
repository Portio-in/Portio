import TechStackType from "./techstack_type";
import PortfolioTemplate from "./portfolio_template";

class Profile{
    constructor({id, name, email, domain, phone, avatar, tagline, description, techStacks, activeTemplate}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.domain = domain;
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
            domain: json.domain,
            phone: json.phone,
            avatar: json.avatar,
            tagline: json.tagline,
            description: json.description,
            techStacks: json.techStacks.map((e)=>TechStackType.fromJson(e)),
            activeTemplate: PortfolioTemplate.fromJson(json.activeTemplate)
        })
    }

    toJson({forUpdate=false}){
        let data = {
            id: this.id,
            name: this.name,
            email: this.email,
            domain: this.domain,
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
            data["tech_stacks_id"] = this.techStacks.map((e)=>e.id);
            delete data.activeTemplate;
        }
        return data;
    }

    static empty(){
        return new Profile({
            id: -1,
            name: "",
            email: "",
            domain: "",
            phone: "",
            avatar: "",
            tagline: "",
            description: "",
            techStacks: [],
            activeTemplate: PortfolioTemplate.empty()
        });
    }

    /**
     * @return {Profile}
     * */
    static copy(profile){
        return Profile.fromJson(profile.toJson({forUpdate: false}));
    }
}

export default Profile;