const express = require("express");
const router = express.Router();

//  TEST ROUTE
router.get("/", (req, res) => {
    res.json({ message: "Products API working " });
});

// ➕ CREATE PRODUCT
router.post("/", (req, res) => {
    res.json({ message: "POST working " });
});

// ⚠️ IMPORTANT: MUST export router
module.exports = router;
