const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    products: [
        {
            productId: String,
            quantity: Number
        }
    ],
    totalAmount: Number,
    status: {
        type: String,
        default: "pending"
    }
}, { timestamps: true });

// IMPORTANT: THIS MUST BE CORRECT
module.exports = mongoose.model("Order", orderSchema);
