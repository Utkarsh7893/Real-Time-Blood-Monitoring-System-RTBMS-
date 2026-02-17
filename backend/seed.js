const mongoose = require("mongoose");
const BloodBank = require("./models/BloodBank");
const Request = require("./models/Request");
const Donors=require("./models/Donors");
const Stats=require("./models/Stats");
const Events=require("./models/Event");

const MONGO = "mongodb+srv://utkarshraj234:fNzwHdHf3GysBOce@utkcluster.mqcdpwj.mongodb.net/?appName=utkCluster";
mongoose.connect(MONGO).then(async () => {
  await BloodBank.deleteMany({});
  await Request.deleteMany({});
  await Stats.deleteMany({});
  await Events.deleteMany({});
  await Donors.deleteMany({});

  await BloodBank.insertMany([
    {
        name: "Nova Hospital",
        address: "210 Lakeview Road",
        location: { coordinates: [77.5921, 12.9752] },
        contact: "+91-9876541230",
        stock: { "A+": 10, "A-": 2, "B+": 15, "O+": 12, "O-": 4, "AB+": 2 }
      },
      {
        name: "Healing Hands Blood Center",
        address: "88 Wellness Street",
        location: { coordinates: [77.6034, 12.9690] },
        contact: "+91-9123456789",
        stock: { "A+": 7, "A-": 1, "B+": 11, "O+": 9, "O-": 3, "AB+": 2 }
      },
      {
        name: "Green Valley Blood Storage",
        address: "56 Forest Lane",
        location: { coordinates: [77.6102, 12.9658] },
        contact: "+91-9000000111",
        stock: { "A+": 14, "A-": 5, "B+": 16, "O+": 18, "O-": 5, "AB+": 3 }
      },
      {
        name: "Humanity Lifeline Bank",
        address: "300 Hope Street",
        location: { coordinates: [77.5870, 12.9812] },
        contact: "+91-9033331122",
        stock: { "A+": 4, "A-": 1, "B+": 9, "O+": 6, "O-": 1, "AB+": 1 }
      },
      {
        name: "Mercy General Hospital Bank",
        address: "74 Unity Road",
        location: { coordinates: [77.5967, 12.9724] },
        contact: "+91-9111122222",
        stock: { "A+": 18, "A-": 2, "B+": 22, "O+": 25, "O-": 8, "AB+": 6 }
      },
      {
        name: "CityCare Blood Bank",
        address: "45 MG Road, Central City",
        location: { coordinates: [77.5946, 12.9716] },
        contact: "+91-9812345678",
        stock: { "A+": 14, "A-": 3, "B+": 9, "O+": 18, "O-": 5, "AB+": 4 }
      },
      {
        name: "HopeLife Blood Center",
        address: "88 Green Park Avenue",
        location: { coordinates: [77.6033, 12.9845] },
        contact: "+91-9823456789",
        stock: { "A+": 6, "A-": 1, "B+": 11, "O+": 7, "O-": 2, "AB+": 1 }
      },
      {
        name: "RedCross Community Blood Bank",
        address: "12 Relief Street, Sector 4",
        location: { coordinates: [77.5802, 12.9638] },
        contact: "+91-9834567890",
        stock: { "A+": 20, "A-": 6, "B+": 18, "O+": 22, "O-": 7, "AB+": 5 }
      },
      {
        name: "Lifeline Hospital Blood Bank",
        address: "301 Wellness Plaza",
        location: { coordinates: [77.6105, 12.9981] },
        contact: "+91-9845678901",
        stock: { "A+": 9, "A-": 2, "B+": 13, "O+": 11, "O-": 3, "AB+": 2 }
      },
      {
        name: "Unity Care Blood Storage",
        address: "76 Harmony Street",
        location: { coordinates: [77.5689, 12.9564] },
        contact: "+91-9856789012",
        stock: { "A+": 12, "A-": 4, "B+": 8, "O+": 14, "O-": 6, "AB+": 3 }
      },
      {
        name: "GreenField Emergency Blood Bank",
        address: "9 Riverside Drive",
        location: { coordinates: [77.6254, 13.0127] },
        contact: "+91-9867890123",
        stock: { "A+": 5, "A-": 1, "B+": 6, "O+": 10, "O-": 2, "AB+": 1 }
      }

  ]);

  await Donors.insertMany([
  {
    name: "Amit Sharma",
    bloodGroup: "A+",
    age: 28,
    gender: "Male",
    phone: "+91-9876543210",
    email: "amit.sharma@example.com",
    city: "Bengaluru",
    state: "Karnataka",
    lastDonation: new Date("2024-10-12"),
    healthInfo: "Healthy, non-smoker, no chronic illnesses.",
    location: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    }
  },
  {
    name: "Priya Nair",
    bloodGroup: "O+",
    age: 32,
    gender: "Female",
    phone: "+91-9898123456",
    email: "priya.nair@example.com",
    city: "Bengaluru",
    state: "Karnataka",
    lastDonation: new Date("2024-08-22"),
    healthInfo: "Regular donor, iron levels normal.",
    location: {
      type: "Point",
      coordinates: [77.6033, 12.9845]
    }
  },
  {
    name: "Rahul Verma",
    bloodGroup: "B+",
    age: 35,
    gender: "Male",
    phone: "+91-9811122233",
    email: "rahul.verma@example.com",
    city: "Mysuru",
    state: "Karnataka",
    lastDonation: new Date("2024-09-05"),
    healthInfo: "Occasional alcohol use, medically fit.",
    location: {
      type: "Point",
      coordinates: [76.6394, 12.2958]
    }
  },
  {
    name: "Sneha Iyer",
    bloodGroup: "AB+",
    age: 26,
    gender: "Female",
    phone: "+91-9822334455",
    email: "sneha.iyer@example.com",
    city: "Chennai",
    state: "Tamil Nadu",
    lastDonation: new Date("2024-11-02"),
    healthInfo: "No allergies, BMI within healthy range.",
    location: {
      type: "Point",
      coordinates: [80.2707, 13.0827]
    }
  },
  {
    name: "Kunal Mehta",
    bloodGroup: "O-",
    age: 40,
    gender: "Male",
    phone: "+91-9833445566",
    email: "kunal.mehta@example.com",
    city: "Mumbai",
    state: "Maharashtra",
    lastDonation: new Date("2024-07-18"),
    healthInfo: "Universal donor, high priority availability.",
    location: {
      type: "Point",
      coordinates: [72.8777, 19.0760]
    }
  },
  {
    name: "Neha Gupta",
    bloodGroup: "A-",
    age: 29,
    gender: "Female",
    phone: "+91-9844556677",
    email: "neha.gupta@example.com",
    city: "Delhi",
    state: "Delhi",
    lastDonation: new Date("2024-09-28"),
    healthInfo: "Mild seasonal allergies, otherwise healthy.",
    location: {
      type: "Point",
      coordinates: [77.2090, 28.6139]
    }
  },
  {
    name: "Rohit Patil",
    bloodGroup: "B-",
    age: 34,
    gender: "Male",
    phone: "+91-9855667788",
    email: "rohit.patil@example.com",
    city: "Pune",
    state: "Maharashtra",
    lastDonation: new Date("2024-10-01"),
    healthInfo: "Physically active, no medical conditions.",
    location: {
      type: "Point",
      coordinates: [73.8567, 18.5204]
    }
  },
  {
    name: "Ananya Das",
    bloodGroup: "O+",
    age: 24,
    gender: "Female",
    phone: "+91-9866778899",
    email: "ananya.das@example.com",
    city: "Kolkata",
    state: "West Bengal",
    lastDonation: new Date("2024-11-10"),
    healthInfo: "First-time donor, medically cleared.",
    location: {
      type: "Point",
      coordinates: [88.3639, 22.5726]
    }
  },
  {
    name: "Vikram Singh",
    bloodGroup: "A+",
    age: 38,
    gender: "Male",
    phone: "+91-9877889900",
    email: "vikram.singh@example.com",
    city: "Jaipur",
    state: "Rajasthan",
    lastDonation: new Date("2024-06-30"),
    healthInfo: "No history of major illness.",
    location: {
      type: "Point",
      coordinates: [75.7873, 26.9124]
    }
  },
  {
    name: "Meera Kulkarni",
    bloodGroup: "AB-",
    age: 31,
    gender: "Female",
    phone: "+91-9888990011",
    email: "meera.k@example.com",
    city: "Nagpur",
    state: "Maharashtra",
    lastDonation: new Date("2024-08-14"),
    healthInfo: "Rare blood group, periodic health checkups.",
    location: {
      type: "Point",
      coordinates: [79.0882, 21.1458]
    }
  }
]
);

  await Request.insertMany([
    { requesterName: "Riya", bloodGroup: "O-", units: 2, hospital: "City Hospital", location: { coordinates: [77.5946, 12.9716] } },
    { requesterName: "Rahul", bloodGroup: "A+", units: 1, hospital: "Red Cross Center", location: { coordinates: [77.6, 12.98] } },
    { requesterName: "Rohan", bloodGroup: "B+", units: 2, hospital: "HBCH", location: { coordinates: [77.6, 12.95] } },
    { requesterName: "Saumya", bloodGroup: "A+", units: 3, hospital: "BHU", location: { coordinates: [77.6, 11.98] } },
    { requesterName: "Dolly", bloodGroup: "AB-", units: 1, hospital: "Apex Hospital", location: { coordinates: [77.6, 12.68] } },
    { requesterName: "Utkarsh", bloodGroup: "AB+", units: 1.5, hospital: "Canopy Hospital", location: { coordinates: [77.3, 12.98] } },
    { requesterName: "Akshay", bloodGroup: "O+", units: 2, hospital: "S-Cross International Hospital", location: { coordinates: [75.6, 12.98] } },
  ]);

  await Stats.insertMany({totalUsers:3569,totalDonationsLiters:45,liveNow:451});

  await Events.insertMany(
    [
      {
        title: "Community Blood Donation Drive",
        description: "Join us for a local blood donation drive to support nearby hospitals and patients in need.",
        date: new Date("2025-01-20"),
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        location: "City Health Center, Downtown",
        organizer: "BloodCare Team",
        tags: ["donation", "community", "health"],
        createdAt: new Date()
      },
      {
        title: "University Blood Awareness Camp",
        description: "An awareness and donation event organized for university students and staff.",
        date: new Date("2025-02-05"),
        image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
        location: "Greenfield University Campus",
        organizer: "Greenfield Medical Club",
        tags: ["awareness", "students", "campus"],
        createdAt: new Date()
      },
      {
        title: "Emergency Blood Drive for Accident Victims",
        description: "Urgent call for blood donors after recent accident cases in the city.",
        date: new Date("2025-03-01"),
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
        location: "Central City Hospital",
        organizer: "BloodCare Team",
        tags: ["emergency", "urgent"],
        createdAt: new Date()
      },
      {
        title: "Emergency Blood Drive for Accident Victims",
        description: "Urgent call for blood donors after recent accident cases in the city.",
        date: new Date("2025-03-01"),
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
        location: "Central City Hospital",
        organizer: "BloodCare Team",
        tags: ["emergency", "urgent"],
        createdAt: new Date()
      },
      {
        title: "City Hospital Blood Donation Marathon",
        description: "A full-day blood donation marathon to support emergency reserves at City Hospital.",
        date: new Date("2025-03-18"),
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        location: "City Hospital Auditorium",
        organizer: "BloodCare Team",
        tags: ["marathon", "donation", "hospital"],
        createdAt: new Date()
      },
      {
        title: "Youth Volunteer Blood Camp",
        description: "A youth-led initiative encouraging first-time donors to contribute to the community.",
        date: new Date("2025-04-12"),
        image: "https://picsum.photos/id/1027/1200/800",
        location: "Community Youth Center",
        organizer: "Youth4Help",
        tags: ["youth", "volunteers", "community"],
        createdAt: new Date()
      },
      {
        title: "Corporate Blood Donation Day",
        description: "A corporate collaboration event aimed at promoting workplace health and community service.",
        date: new Date("2025-05-03"),
        image: "https://picsum.photos/id/1011/1200/800",
        location: "TechPark Tower B",
        organizer: "TechPark HR Initiative",
        tags: ["corporate", "employees", "CSR"],
        createdAt: new Date()
      },
      {
        title: "World Blood Donor Day Celebration",
        description: "A special event honoring donors, featuring awareness workshops and donation stalls.",
        date: new Date("2025-06-14"),
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
        location: "City Convention Center",
        organizer: "BloodCare Team",
        tags: ["world donor day", "awareness", "celebration"],
        createdAt: new Date()
      },
    ]
  );

  console.log("Seed done");
  process.exit(0);
});
