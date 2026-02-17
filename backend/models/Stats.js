const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  totalUsers: { type: Number, default: 0 },
  totalDonationsLiters: { type: Number, default: 0 },
  liveNow: { type: Number, default: 0 }
});

module.exports = mongoose.model("Stats", StatsSchema);
