const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  requesterName: String,
  bloodGroup: String,
  units: Number,
  hospital: String,
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], default: [0,0] } // [lng, lat]
  },
  status: { type: String, enum: ["open","fulfilled","cancelled"], default: "open" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Request", RequestSchema);
