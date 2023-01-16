const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully");
  } catch (error) {
    console.error("Connect failed");
  }
}

module.exports = { connect };
