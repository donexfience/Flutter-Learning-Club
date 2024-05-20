const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    profileProgress: {
      type: Number,
      default: 0,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    //   wishlist: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Product',
    //   }],
    //   cart: [{
    //     product: {
    //       type: Schema.Types.ObjectId,
    //       ref: 'Product',
    //     },
    //     quantity: {
    //       type: Number,
    //       required: true,
    //       min: 1,
    //     },
    //   }],
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
