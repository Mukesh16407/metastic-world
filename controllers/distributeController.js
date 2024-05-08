const User = require("../models/userModal");

exports.distributeEarnings = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    if (!userId || !amount) {
      return res.status(400).send({ error: "Missing required fields" });
    }

    let user = await User.findById(userId).populate("parentId");

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    if (amount <= 0) {
      return res.status(400).send({ error: "Amount must be positive" });
    }

    let remainingAmount = amount;
    const distributionPercentages = [
      0.01, 0.01, 0.01, 0.01, 0.05, 0.1, 0.2, 0.4,
    ];
    const distributions = [];
    for (let i = user.level + 1; i <= 8; i++) {
      if (!user.parentId) break;
      const parent = user.parentId;
      const distribution = amount * distributionPercentages[i - 1];
      remainingAmount -= distribution;
      // Update user balance (implementation depends on your needs)
      console.log(`User ${parent._id} (Level ${i}) receives: ${distribution}`);

      distributions.push({
        level: i,
        userId: parent._id,
        amount: distribution,
      });

      user = await User.findById(parent._id);
    }
    res.status(200).send({
      message: "Distribution successful",
      distributions,
      remainingAmount,
    });
  } catch (error) {
    res.status(401).send({ error: error });
  }
};
