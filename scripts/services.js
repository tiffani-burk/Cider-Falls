import { getParkAreas, getServices } from "./data.js";
import { getParkAndServiceJoinTable } from "./data.js";

//invoke getServices and declare a variable
const services = getServices()
const parkAndServices = getParkAndServiceJoinTable()
const parkAreas = getParkAreas()


//create a function to loop through the objects and return <ul> HTML respresentation of the object name 

export const serviceList = (service) => {
    let html = "<ul>"

for (const parkAndService of parkAndServices) {
    if (parkAndService.serviceId === service.id) {
        for (const parkArea of parkAreas) {
            if (parkAndService.parkId === parkArea.id) {
                html += `<li id="serviceName--${service.id}>${service.serviceName}</li>"`
            }
        }
    }
}
    html += "</ul>"

    return html
}

//dont forget to invoke serviceList and pass it an argument