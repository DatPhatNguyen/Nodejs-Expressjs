const mongoose = require("mongoose");
// Declare

const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectID;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
// define Course's Schema
const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoID: { type: String, required: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
