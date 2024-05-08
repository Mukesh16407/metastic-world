const express = require("express");
const router = express.Router();
const { distributeEarnings } = require("../controllers/distributeController");

router.post("/distribute", distributeEarnings);

module.exports = router;
