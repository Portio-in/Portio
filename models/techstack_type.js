class TechStackType{
    constructor({id, name, icon}){
        this.id = id;
        this.name = name;
        this.icon = icon;
    }

    static fromJson(json){
        return new TechStackType({
            id: json.id,
            name: json.name,
            icon: json.icon
        })
    }

    toJson(){
        return {
            id: this.id,
            name: this.name,
            icon: this.icon
        }
    }
}

export default TechStackType;