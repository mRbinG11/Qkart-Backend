const express = require("express");
const router = express.Router();

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Reroute all API requests beginning with the `/v1/users` route to Express router in user.route.js
const userRoute = require("./user.route");
router.use("/users", userRoute);

// TODO: CRIO_TASK_MODULE_AUTH - Reroute all API requests beginning with the `/v1/auth` route to Express router in auth.route.js 
const authRoute = require("./auth.route");
router.use("/auth", authRoute);

const productRoute = require("./product.route");
router.use("/products", productRoute);

module.exports = router;
