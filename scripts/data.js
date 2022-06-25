//This is my database, storing all data into an array of objects. 
//Entities include:Guests, Services and Park Areas

const database = {
     //Guests data stored to an array of objects
    guests: [{     
        id: 1, 
        firstName: "Janice",
        lastName: "Hosenstein",
        park_area_id: 5
    },
    {
        id: 2,
        firstName: "Joey",
        lastName: "Tribbiani",
        park_area_id: 1
    },
    {
        id: 3,
        firstName: "Gunther",
        lastName: "the Coffee guy",
        park_area_id: 6
    },
    {
        id: 4,
        firstName: "Mike",
        lastName: "Hannagan",
        park_area_id: 2
    },
    {
        id: 5,
        firstName: "Chloe",
        lastName: "the Copy Girl",
        park_area_id: 5
    },
    {
        id: 6,
        firstName: "Pheobe",
        lastName: "Buffet",
        park_area_id: 1
    },
    {
        id: 7,
        firstName: "Rachel",
        lastName: "Green",
        park_area_id: 6
    },
    {
        id: 8,
        firstName: "Chandler",
        lastName: "Bing",
        park_area_id: 6
    },
    {
        id: 9,
        firstName: "Ross",
        lastName: "Gellar",
        park_area_id: 3
    },
    {
        id: 10,
        firstName: "Monica",
        lastName: "Gellar",
        park_area_id: 1
    }
],

//List of Park Areas data stored to an array of objects
    parkAreas: [{
        id: 1,
        nameOfParkArea: "Lodge",
    },
    {
        id: 2,
        nameOfParkArea: "Lost Wolf Hiking Trail",
    },
    {
        id: 3,
        nameOfParkArea: "Chamfort River",
    },
    {
        id: 4,
        nameOfParkArea: "Gander River",
    },
    {
        id: 5,
        nameOfParkArea: "Campgrounds",
    },
    {
        id: 6,
        nameOfParkArea: "Pine Bluff Hiking Trail",
    }
],

//List of services/activities offered by park area, stored to an array of objects
    services: [{
        id: 1,
        serviceName: "Lodging",
    },
    {
        id: 2,
        serviceName: "Parking",
    },
    {
        id: 3,
        serviceName: "Information",
    },
    {
        id: 4,
        serviceName: "Picnicking",
    },
    {
        id: 5,
        serviceName: "Hiking",
    },
    {
        id: 6,
        serviceName: "Rock Climbing",
    },
    {
        id: 7,
        serviceName: "Rafting",
    },
    {
        id: 8,
        serviceName: "Conueing",
    },
    {
        id: 9,
        serviceName: "Fishing",
    },
    {
        id: 10,
        serviceName: "Ziplining",
    }],

    joinTableForServicesAndParkAreas: [{
        id:1,
        parkId: 1,
        serviceId: 1
    },
    {
        id:1,
        parkId: 1,
        serviceId: 2
    },
    {
        id:1,
        parkId: 1,
        serviceId: 3
    },
    {
        id:1,
        parkId: 1,
        serviceId: 4
    },
    {
        id: 2,
        parkId: 2,
        serviceId: 4
    },
    {
        id: 2,
        parkId: 2,
        serviceId: 5
    },
    {
        id: 2,
        parkId: 2,
        serviceId: 6
    },
    {
        id: 3,
        parkId: 3, 
        serviceId: 7
    },
    {
        id: 3,
        parkId: 3, 
        serviceId: 8
    },
    {
        id: 3,
        parkId: 3, 
        serviceId: 9
    },
    {
        id: 4,
        parkId: 4,
        serviceId: 5
    },
    {
        id: 4,
        parkId: 4,
        serviceId: 9
    },
    {
        id: 5,
        parkId: 5,
        serviceId: 1
    },
    {
        id: 5,
        parkId: 5,
        serviceId: 2
    },
    {
        id: 5,
        parkId: 5,
        serviceId: 3
    },
    {
        id: 6,
        parkId: 6,
        serviceId: 4
    },
    {
        id: 6,
        parkId: 6,
        serviceId: 5
    },
    {
        id: 6,
        parkId: 6,
        serviceId: 10
    }
]
}

//create functions to export this data in the form of an array of objects

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getParkAndServiceJoinTable = () => {
    return database.joinTableForServicesAndParkAreas.map(joinTableForServiceAndArea => ({...joinTableForServiceAndArea}))
}