const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

console.log("🧾 orderRoutes loaded");

// 📦 GET ALL ORDERS
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ➕ CREATE ORDER
router.post("/", async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
