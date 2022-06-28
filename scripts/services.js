import { getServices } from "./data.js";
import { getParkAndServiceJoinTable } from "./data.js";
import { getParkAreas } from "./data.js";

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


//Create a function to loop through the services and check if the id matches the serviceId from the join table. Pass join table as an argument to this function. 
//And return string interpolation "Hiking is available at the Lost Wolf Hiking Train and Pine Bluff Trails."


const areasThatHaveService = (service) => {
    let areasWithService = ""
    for (const parkArea of parkAreas) {
        for (const parkAndService of parkAndServices) {
            if (parkArea.id === parkAndService.parkId) { //PROBLEM: parkAndServices.parkId showing undefined
                if (parkAndService.serviceId === service.id) {
                    areasWithService += `${parkArea.nameOfParkArea}`
                }
            }
        }
    }
    return areasWithService
}

//create click event and invoke above function in it and pass it the service id as argument

document.addEventListener(
    "click",
    (clickEvent) => {
        const serviceClicked = clickEvent.target //target click event

        if (serviceClicked.id.startsWith("serviceName")) {//checking to see if the id matches the id in the document
            const [, serviceId] = serviceClicked.id.split("--") //splitting the id at (--)

            for (const service of services) {
                if (service.id === parseInt(serviceId)) {//turns string into integer
                    // const theAreasThatHaveService = areasThatHaveService(service)//invoke areasThatHaveService and pass it the service id
                    window.alert(`${service.serviceName} is available at ${areasThatHaveService(service)}`)
                }
            }
        }
    }
)


 //if parkId from parkAndService === id from park && if serviceId from parkAndServices
 // === id from service, then return a string with the name property from parkArea


