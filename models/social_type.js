class SocialType{
    constructor({id, type, icon}){
        this.id = id;
        this.type = type;
        this.icon = icon;
    }

    static fromJson(json){
        return new SocialType({
            id: json.id,
            type: json.type,
            icon: json.icon
        })
    }

    toJson(){
        return {
            id: this.id,
            type: this.type,
            icon: this.icon
        }
    }

    getTitle(){
        if(this.type === "") return "";
        return this.type.charAt(0).toUpperCase() + this.type.slice(1);
    }

    static empty(){
        return new SocialType({
            id: 0,
            type: "",
            icon: ""
        })
    }

}

export default SocialType;