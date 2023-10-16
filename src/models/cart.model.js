const mongoose = require("mongoose");
const { productSchema } = require("./product.model");
const config = require("../config/config");

// TODO: CRIO_TASK_MODULE_CART - Complete cartSchema, a Mongoose schema for "carts" collection
const cartItemsSchema = new mongoose.Schema({
  product: { type: productSchema },
  quantity: { type: Number },
});

const cartSchema = mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    cartItems: { type: [cartItemsSchema] },
    paymentOption: { type: String, default: config.default_payment_option },
  },
  {
    timestamps: false,
  }
);

/**
 * @typedef Cart
 */
const Cart = mongoose.model("Cart", cartSchema);

module.exports.Cart = Cart;
