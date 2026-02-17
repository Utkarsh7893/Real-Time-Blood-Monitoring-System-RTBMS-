// models/Event.js
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({

  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: true }, // URL of event image
  location: { type: String, required: true },
  organizer: { type: String, default: "BloodCare Team" },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model("Event", EventSchema);
