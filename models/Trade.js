const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema(
  {
    pair: String,
    type: String,
    risk: Number,
    rr: Number,
    pnl: Number,
  },
  { timestamps: true } // creates createdAt & updatedAt automatically
);

module.exports = mongoose.model("Trade", tradeSchema);
