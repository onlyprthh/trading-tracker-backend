const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
  pair: String,
  type: String,
  risk: Number,
  rr: Number,
  pnl: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Trade", tradeSchema);