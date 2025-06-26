const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      require: true,
    },
    name: String,
    image: String,
    price: String,
    size: String,
    color: String,
    qunatity: {
      type: Number,
      default: 1,
    },
  },
  { _id: false }
);

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: user,
    },
    guest: {
      type: String,
    },
    products: [cartItemSchema],
    totalPrice: {
      type: true,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

modules.export = mongoose.model("Cart", cartItemSchema);
