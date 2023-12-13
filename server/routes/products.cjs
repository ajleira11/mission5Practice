const express = require("express");
const router = express.Router();
const Product = require("../models/products.cjs");

router.get("/", async (req, res) => {
  console.log("GET request for all products");
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
