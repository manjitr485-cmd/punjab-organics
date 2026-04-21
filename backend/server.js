const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

console.log("🟢 Server file loaded");

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
connectDB();

// 🔥 IMPORTANT: ROUTES MUST BE REGISTERED BEFORE LISTEN
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("🚀 Backend is working perfectly");
});

// Start server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🌐 Server running on port ${PORT}`);
});
