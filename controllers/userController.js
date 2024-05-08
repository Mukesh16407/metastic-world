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
    const level = parentId ? parent.level + 1 : 0;

    if (level > 8) {
      return res.status(400).send({ error: "Maximum level reached" });
    }

    const user = new User({ name, parentId, level });
    await user.save();

    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
