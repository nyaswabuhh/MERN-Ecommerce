const express = require("express");
const Subscriber = require("../models/Subscriber");

const router = express.Router();

//@route POST /api/subscribe
//@desc handle newsletter subs
//@access Public

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "email required" });
  }
  try {
    //check if email is already in use

    let subscriber = await Subscriber.findOne({ email });
    if (subscriber) {
      return res.status(400).json({ message: "email is already subscribed" });
    }
    //create new subscriber

    subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(201).json({ message: "successfully subscribed to newsletter" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ meesage: "server error" });
  }
});

module.exports = router;
