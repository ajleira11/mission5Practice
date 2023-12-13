require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const productsRouter = require("./routes/products.cjs");

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

module.exports = app;
