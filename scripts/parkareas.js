import { getParkAreas } from "./data.js";
import { serviceList } from "./services.js";


//import park area data from the database, in form of array of objects

//invoke the function and store value to variable
const parkAreas = getParkAreas()

//create a function to display an HTML resprestation of the park areas in an unordered list

export const AreasOfPark = () => {
    let html = "<ul>"

    for (const area of parkAreas) {
        html += `<li class="park-card" id="park_area--${area.id}">${area.nameOfParkArea}  <br>
        <h4> Services</h4>
        <br>
        ${serviceList(area.id)}
        </li>`
    }
    html += "</ul>"
    return html
}

//AreasOfPark is returning a list of the area names of the park


//steps
//import function from data.js that has the park area data value stored 
//invoke that function and set it to the value of a variable
// create a new function in this file that returns an undered list of HTML representation 
// function should...
//-have a variable that is equal to unordered list "<ul>"
// - loop through the array of area objects
//- return the name property in the form of a string 
//-close the tag on my UL and add it to my variable
//return the variable, which now has the UL and string of names in it
//invoke function in main.js

