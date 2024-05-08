const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: String,
  parent: { type: ObjectId, ref: "User" },
});

module.exports = mongoose.model("User", userSchema);
