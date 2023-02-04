class PortfolioTemplate{
    constructor({id, code, name, previewimg, author, githubLink, totalInstalls}){
        this.id = id;
        this.code = code;
        this.name = name;
        this.previewimg = previewimg;
        this.author = author;
        this.githubLink = githubLink;
        this.totalInstalls = totalInstalls;
    }

    static fromJson(json){
        return new PortfolioTemplate({
            id: json.id,
            code: json.code,
            name: json.name,
            previewimg: json.previewimg,
            author: json.author,
            githubLink: json.githubLink,
            totalInstalls: json.totalInstalls
        });
    }

    toJson(){
        return {
            id: this.id,
            code: this.code,
            name: this.name,
            previewimg: this.previewimg,
            author: this.author,
            githubLink: this.githubLink,
            totalInstalls: this.totalInstalls
        }
    }

    static empty(){
        return new PortfolioTemplate({
            id: null,
            code: "",
            name: "",
            previewimg: "",
            totalInstalls: 0,
        })
    }
}

export default PortfolioTemplate;