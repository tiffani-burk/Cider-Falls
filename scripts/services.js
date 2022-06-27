import { getParkAreas, getServices } from "./data.js";
import { getParkAndServiceJoinTable } from "./data.js";

//invoke getServices and declare a variable
const services = getServices()
const parkAndServices = getParkAndServiceJoinTable()
const parkAreas = getParkAreas()


//create a function to loop through the objects and return <ul> HTML respresentation of the object name 

export const serviceList = (parkAreaId) => {
    let html = "<ul>"

    for (const parkAndService of parkAndServices) {
        for (const service of services) {
            if (parkAndService.serviceId === service.id) {
                    if (parkAndService.parkId === parkAreaId) {
                        html += `<li class="serviceName" id="serviceName--${service.id}">${service.serviceName}</li>`
                    }
                
            }
        }

    }
    html += "</ul>"

    return html
}



//Goal is to get the services offered to show under the specific park area that offers those services

//Algorithmic thinking: If the ID from the service matches the serviceId from parkAndService & if the parkId on 
//parkAndService matches the id on parkArea, then log the return the serviceName from service as a string.
//Steps:    

//Data needed: array of services objects, array of park area objects, array of join table (service and area) objects. 
