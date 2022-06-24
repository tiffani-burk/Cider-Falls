import { getParkAreas } from "./data.js";
//import park area data from the database, in form of array of objects

//invoke the function and store value to variable
const parkAreas = getParkAreas()

//create a function to display an HTML resprestation of the park areas in an unordered list

export const AreasOfPark = () => {
    let html = "<ul>"

    for (const area of parkAreas) {
        html += `<li id="park_area--${area.id}">${area.nameOfParkArea}</li>`
    }
    html += "</ul>"
    return html
}

//AreasOfPark is returning a list of the area names of the park

//PROBLEM!! THIS LIST IS ONLY RETURNING ONE PARK AREA, INSTEAD OF A LIST OF ALL THE PARK AREAS. 