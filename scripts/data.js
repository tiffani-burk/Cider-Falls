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
        lastName: "Joey",
        lastName: "Tribbiani",
        park_area_id: 1
    },
    {
        id: 3,
        lastName: "Gunther",
        lastName: "the Coffee guy",
        park_area_id: 6
    },
    {
        id: 4,
        lastName: "Mike",
        lastName: "Hannagan",
        park_area_id: 2
    },
    {
        id: 5,
        lastName: "Chloe",
        lastName: "the Copy Girl",
        park_area_id: 5
    },
    {
        id: 6,
        lastName: "Pheobe",
        lastName: "Buffet",
        park_area_id: 1
    },
    {
        id: 7,
        lastName: "Rachel",
        lastName: "Green",
        park_area_id: 6
    },
    {
        id: 8,
        lastName: "Chandler",
        lastName: "Bing",
        park_area_id: 6
    },
    {
        id: 9,
        lastName: "Ross",
        lastName: "Gellar",
        park_area_id: 3
    },
    {
        id: 10,
        lastName: "Monica",
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
        serviceId: ["1, 2, 3, 4"]   //?? assigning multiple services to the key serviceId
    },
    {
        id: 2,
        parkId: 2,
        serviceId: ["4, 5, 6"]
    },
    {
        id: 3,
        parkId: 3, 
        serviceId: ["7, 8, 9"]
    },
    {
        id: 4,
        parkId: 4,
        serviceId: ["5, 9"]
    },
    {
        id: 5,
        parkId: 5,
        serviceId: ["1, 2, 3"]
    },
    {
        id: 6,
        parkId: 6,
        serviceId: ["4, 5, 10"]
    }
]
}

//create functions to export this data in the form of objects
//exporting guest objects
export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}
