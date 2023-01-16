class PortfolioTemplate{
    constructor({id, code, name, previewimg, author, githubLink}){
        this.id = id;
        this.code = code;
        this.name = name;
        this.previewimg = previewimg;
        this.author = author;
        this.githubLink = githubLink;
    }

    static fromJson(json){
        return new PortfolioTemplate({
            id: json.id,
            code: json.code,
            name: json.name,
            previewimg: json.previewimg,
            author: json.author,
            githubLink: json.githubLink
        });
    }

    toJson(){
        return {
            id: this.id,
            code: this.code,
            name: this.name,
            previewimg: this.previewimg,
            author: this.author,
            githubLink: this.githubLink
        }
    }

    static empty(){
        return new PortfolioTemplate({
            id: null,
            code: "",
            name: "",
            previewimg: ""
        })
    }
}

export default PortfolioTemplate;