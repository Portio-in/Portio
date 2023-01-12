import {data} from "autoprefixer";

function formatDate(date) {
    if (date == null) return "";
    date = new Date(date);
    if(date === "Invalid Date") return "";
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

function formattedDateToTZFormat(date) {
    if (date == null || date === undefined || date === "") return "";
    let parts = date.split('-');
    let mydate = new Date(new Date(parseInt(parts[2]), parseInt(parts[1])-1, parseInt(parts[0]), 0,0,0)+60);
    return mydate.toISOString();
}

export {formatDate, formattedDateToTZFormat};