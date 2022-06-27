import { guestList } from "./guests.js";
import { AreasOfPark } from "./parkareas.js";
import { serviceList } from "./services.js";
//import the guestList function 

//This is my main script file that is linked to my html file. 

//create a varaible to target the queryselector method of the entire document and match the CSS selector
const mainContainer = document.querySelector("#main-content")

//invoke guestList as a string and set it to a new variable
const mainHTML  =

`<aside id="guest-list">
    <h2>Guests at Park</h2>
    ${guestList()}
</aside>
<section id="park-areas">
<h2>Park Areas</h2>
<h3><em>Explore by direction</em></h3>
<div class="list-of-park-areas"<div
${AreasOfPark()}
</div>
<div>
${serviceList()}
</div>
</section>
`


//taking the queryselector guestContainer and setting it to a new value of guestHTML
mainContainer.innerHTML = mainHTML






// <!-- My html going in main.js when park areas function and services functions are done -->

    
//         <article id="list-of-park-areas">
//         <div class="park-card">
//             <h3>Lodge</h3>
//             <h4>SERVICES</h4>
//         </div>
//         </article>
//     </section>