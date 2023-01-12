import {data} from "autoprefixer";

function formatDate(date) {
    if (date == null) return "";
    date = new Date(date);
    if(date === "Invalid Date") return "";
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

function formattedDateToTZFormat(date) {
    if (date == null || data === undefined || data === "") return "";
    let parts = data.split('-');
    let mydate = new Date(parts[0], parts[1] - 1, parts[2]);
    return mydate.toISOString();
}

export {formatDate, formattedDateToTZFormat};