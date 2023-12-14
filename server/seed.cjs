// databaseUtils.js

const fs = require("fs");
const path = require("path");

async function seedDatabase() {
  const YourModel = require("./models/products.cjs");

  try {
    const count = await YourModel.countDocuments();

    if (count === 0) {
      const jsonFilePath = path.join(__dirname, "products.json");
      const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

      const result = await YourModel.insertMany(jsonData);
      console.log(`${result.length} documents inserted`);
    } else {
      console.log("Database already has data");
    }
  } catch (error) {
    console.error("Error during seeding:", error);
  }
}

module.exports = seedDatabase;
