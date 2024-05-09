const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  parentId: { type: ObjectId, ref: "User", default: null },
});

module.exports = mongoose.model("User", userSchema);
