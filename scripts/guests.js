
import { getGuests } from "./data.js";
//invoke getGuests
const guests = getGuests()

//create new function
//goal of this function is to return an HTML representation of an unoreded list of the guest names
export const guestList = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li id="guestName--${guest.id}">${guest.firstName} ${guest.lastName}</li>` //accessing id and name of guest using dot notation; adding the string with the list item to our variable
    }

    html += "</ul>" //closing the unordered list

    return html //returning the variable with the list of guests in it 
}
//guestList function is returning a list of guests

//steps:
//import function from data.js that has the guest list data value stored 
//invoke that function and set it to the value of a variable
// create a new function in this file that returns an undered list of HTML representation 
// function should...
//-have a variable that is equal to unordered list "<ul>"
// - loop through the array of guest objects
//- return the name property in the form of a string 
//-close the tag on my UL and add it to my variable
//return the variable, which now has the UL and string of names in it
//invoke function in main.js
