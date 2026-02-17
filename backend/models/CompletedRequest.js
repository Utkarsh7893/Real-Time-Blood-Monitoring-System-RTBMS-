const mongoose = require("mongoose");

const CompletedRequestSchema = new mongoose.Schema({
  requesterName: String,
  bloodGroup: String,
  units: Number,
  location: {
    type: { type: String },
    coordinates: [Number]
  },
  phone: String,
  fulfilledByBank: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BloodBank"
  },
  originalRequestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Request"
  },
  completedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CompletedRequest", CompletedRequestSchema);
