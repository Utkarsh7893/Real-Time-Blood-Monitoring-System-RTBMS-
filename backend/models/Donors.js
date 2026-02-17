const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  age: Number,
  gender: String,
  phone: String,
  email: String,
  city: String,
  state: String,
  lastDonation: Date,

  // NEW FIELD: Health information (long text)
  healthInfo: {
    type: String,
    default: ""
  },

  // Geo location
  location: {
    type: { 
      type: String, 
      enum: ['Point'], 
      required: true 
    },
    coordinates: {
      type: [Number],   // [lng, lat]
      required: true
    }
  },

  createdAt: { type: Date, default: Date.now }
});

DonorSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Donor", DonorSchema);
