import { guestList } from "./guests.js"
//import the guestList function 

//This is my main script file that is linked to my html file. 

//create a varaible to target the queryselector method of the entire document and match the CSS selector
const guestContainer = document.querySelector("#guest-list")

//invoke guestList as a string and set it to a new variable
const guestHTML = `${guestList()}`

//taking the queryselector guestContainer and setting it to a new value of guestHTML
guestContainer.innerHTML = guestHTML





