const express = require("express");
const router = express.Router();

const {
  getTrades,
  createTrade,
  updateTrade,
  deleteTrade
} = require("../controllers/tradecontroller");

router.get("/", getTrades);
router.post("/", createTrade);
router.put("/:id", updateTrade);
router.delete("/:id", deleteTrade);

module.exports = router;
