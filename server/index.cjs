const app = require("./app.cjs");
const port = process.env.PORT || 5001;
const mongoose = require("mongoose");
const dbURI = process.env.MONGO_URI || "mongodb://localhost:27017/mongo";

mongoose.Promise = global.Promise;
mongoose
  .connect(dbURI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server listening on port ${port}`));
