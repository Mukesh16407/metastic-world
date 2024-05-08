const User = require("../models/userModal");

exports.createUser = async (req, res) => {
  try {
    const { name, parentId } = req.body;

    let parent;
    if (parentId) {
      parent = await User.findById(parentId);
      if (!parent) {
        return res.status(404).json({ error: "Parent user not found" });
      }
    }

    const user = new User({ name, parent });
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
