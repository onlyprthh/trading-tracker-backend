const Trade = require("../models/Trade");

exports.getTrades = async (req, res) => {
  try {
    const trades = await Trade.find().sort({ createdAt: -1 });
    res.json(trades);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch trades" });
  }
};

exports.createTrade = async (req, res) => {
  const trade = await Trade.create(req.body);
  res.status(201).json(trade);
};

exports.updateTrade = async (req, res) => {
  const trade = await Trade.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(trade);
};

exports.deleteTrade = async (req, res) => {
  await Trade.findByIdAndDelete(req.params.id);
  res.json({ message: "Trade deleted" });
};
