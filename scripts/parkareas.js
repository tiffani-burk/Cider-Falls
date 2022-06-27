import { getGuests, getParkAreas } from "./data.js";
import { serviceList } from "./services.js";


//import park area data from the database, in form of array of objects

//invoke the function and store value to variable
const parkAreas = getParkAreas()
const guests = getGuests()


//create a function to display an HTML resprestation of the park areas in an unordered list

export const AreasOfPark = () => {
    let html = "" //set to empty strings, so flexbox could access the div

    for (const area of parkAreas) {
        html += `<div class="park-card" id="park_area--${area.id}"><h2 id="area--${area.id}">${area.nameOfParkArea} </h2> <br>
        <h4> Services</h4>
        <br>
        ${serviceList(area.id)} 
        </div>`
    }

    return html
}
//line 21 is passing the area.id as an argument to serviceList, to get the correct services listed under the areas. 
//AreasOfPark is returning a list of the area names of the park


//Adding click event to the area titles to show how many guests are in that area
// ex: "there are 4 guests in this area."

//function that is responsible for returning the sum of guests at a park area
const numberOfGuests = (parkArea) => {  //need a parameter, to later pass the area data to
    let sumOfGuests = 0 //variable with zero, later will add sum of guests to

        for (const guest of guests){ //looping over each guest from the array of guest objects
        if (guest.park_area_id === parkArea.id) { //checking to see if the parkid on guest matches the id on park
            sumOfGuests += 1 //adding one each time it loops 
        }
    }
    return sumOfGuests
}

//add click event and invoke the numberOfGuests function 
document.addEventListener(
    "click",
    (clickEvent) => {
        const areaClicked = clickEvent.target //targeting the name of this click event
        console.log(clickEvent)

        if (areaClicked.id.startsWith("area")) { //checking to see if whatever we clicked on has the ID of area
            const [, areaId] = areaClicked.id.split("--")  //splitting that the --

            for (const parkArea of parkAreas) {//for loop to iterate over each park area
                if (parkArea.id === parseInt(areaId)) { //parseInt turns string to integer
                    const TotalNumberOfGuests = numberOfGuests(parkArea) //passing the parkArea data to the numberOfGuests function 
                    window.alert(`There are ${TotalNumberOfGuests} in this area.`) //creating a window pop up with a string in it, saying how many guests are in this area. 
                }
            }
        }
    }
)

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

