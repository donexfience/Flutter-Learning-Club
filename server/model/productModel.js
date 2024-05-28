const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    Category: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    markup: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "out of stock",
        "published",
        "low quantity",
        "draft",
        "unpublished",
      ],
    },
    attributes: [
      {
        name: {
          type: String,
        },
        value: {
          type: String,
        },
        isHighlighted: {
          type: Boolean,
        },
        moreImageURL: [
          {
            type: String,
          },
        ],
      },
    ],

    offer: {
      type: String,
      required: true,
      default: 0,
    },
    numberOfReviews: {
      type: Number,
      requried: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;
   