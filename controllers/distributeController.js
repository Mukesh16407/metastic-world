const User = require("../models/userModal");

exports.distributeEarnings = async (req, res) => {
  try {
    const { userId, totalAmount } = req.body;
    let user = await User.findById(userId).populate("parent");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const distribution = {};
    let remainingAmount = totalAmount;

    while (user && remainingAmount > 0) {
      const share = calculateShare(user.level, totalAmount);
      distribution[user._id] = share;
      remainingAmount -= share;

      if (user.parent) {
        user = await User.findById(user.parent).populate("parent");
      } else {
        break; // Break the loop if no parent exists
      }
    }

    res.status(200).json({ distribution, remainingAmount });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

function calculateShare(level, totalAmount) {
  switch (level) {
    case 0:
      return (20 / 100) * totalAmount;
    case 1:
      return (10 / 100) * totalAmount;
    case 2:
      return (5 / 100) * totalAmount;
    default:
      return (1 / 100) * totalAmount;
  }
}
