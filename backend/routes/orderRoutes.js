const express = require("express");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//@router GET /api/orders/my-orders
//@desc get all orders for logged in user
//@access Private

router.get("/my-orders", protect, async (req, res) => {
  try {
    //Find orders of authenticated user

    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    }); //sort by most recent order

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
});

//@route GET /api/orders/:id
//desc get order details by Id
//@access Private

router.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }
    //return full order details

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
