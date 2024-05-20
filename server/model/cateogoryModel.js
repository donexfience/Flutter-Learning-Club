const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    require: true,
  },
});

const categoryModel = mongoose.model("Category", categorySchema);
module.exports = categoryModel;
