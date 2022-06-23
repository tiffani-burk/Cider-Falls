//This is my database, storing all data into an array of objects. 
//Entities include:Guests, Services and Park Areas

let database = {
     //Guests data stored to an array of objects
    const guests: = [{     
        id: 1, 
        guestName: "Janice Hosenstein",
        email: "lorem@gmail.com",
        phone_number: 555-5555,
        park_area_id: 5
    },
    {
        id: 2,
        guestName: "Joey Tribbiani",
        email: "lorem@gmail.com",
        phone_number: "lorem@gmail.com",
        park_area_id: 1
    },
    {
        id: 3,
        guestName: "Gunther the Coffee guy",
        email: "lorem@gmail.com",
        phone_number: "lorem@gmail.com",
        park_area_id: 6
    },
    {
        id: 4,
        guestName: "Mike Hannagan",
        email: "lorem@gmail.com",
        phone_number: "lorem@gmail.com",
        park_area_id: 2
    },
    {
        id: 5,
        guestName: "Jack Johnson",
        email: "lorem@gmail.com",
        phone_number: 555-5555,
        park_area_id: 5
    },
    {
        id: 6,
        guestName: "Pheobe Buffet"k ,
        email: "lorem@gmail.com",
        phone_number: 555-5555,
        park_area_id: 1
    },
    {
        id: 7,
        guestName: "Rachel Green",
        email: "lorem@gmail.com",
        phone_number: 555-5555,
        park_area_id: 6
    },
    {
        id: 8,
        guestName: "Chandler Bing",
        email: "lorem@gmail.com",
        phone_number: 555-5555,
        park_area_id: 6
    },
    {
        id: 9,
        guestName: "Ross Gellar",
        email: "lorem@gmail.com",
        phone_number: 555-5555,
        park_area_id: 3
    },
    {
        id: 10,
        guestName: "Monica Gellar",
        email: "lorem@gmail.com",
        phone_number: 555-5555,
        park_area_id: 1
    }
]

//List of Park Areas data stored to an array of objects
    const parkAreas: = [{
        id: 1,
        nameOfParkArea: "Lodge",
        // serviceId: 001,
    },
    {
        id: 2,
        nameOfParkArea: "Lost Wolf Hiking Trail",
        // serviceId: ,
 
    },
    {
        id: 3,
        nameOfParkArea: "Chamfort River",
        // serviceId: ,
  
    },
    {
        id: 4,
        nameOfParkArea: "Gander River",
        // serviceId: ,
  
    },
    {
        id: 5,
        nameOfParkArea: "Campgrounds",
        // serviceId: ,
      
    },
    {
        id: 6,
        nameOfParkArea: "Pine Bluff Hiking Trail",
        // serviceId: ,
    
    }
]

//List of services/activities offered by park area, stored to an array of objects
    const services: =[{
        id: 1,
        serviceName: "Lodging",
        // parkId:
        // guestId:
    },
    {
        id: 2,
        serviceName: "Parking",
        // parkId:
        // guestId:
    },
    {
        id: 3,
        serviceName: "Information",
        // parkId:
        // guestId:
    },
    {
        id: 4,
        serviceName: "Picnicking",
        // parkId:
        // guestId:
    },
    {
        id: 5,
        serviceName: "Hiking",
        parkId:
        guestId:
    },
    {
        id: 6,
        serviceName: "Rock Climbing",
        // parkId:
        // guestId:
    },
    {
        id: 7,
        serviceName: "Rafting",
        // parkId:
        // guestId:
    },
    {
        id: 8,
        serviceName: "Conueing",
        // parkId:
        // guestId:
    },
    {
        id: 9,
        serviceName: "Fishing",
        // parkId:
        // guestId:
    },
    {
        id: 10,
        serviceName: "Ziplining",
        // parkId:
        // guestId:
    }]
}

//create functions to export this data in the form of objects