const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const signUp = async (req, res) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      city,
      state,
      zipCode,
    } = req.body;
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !address ||
      !city ||
      !state ||
      !zipCode
    ) {
      return res.status(400).json({ message: "All fields must be provided" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashPassword,
      firstName,
      lastName,
      phoneNumber,
      address,
      city,
      state,
      zipCode,
    });
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({ message: "User created successfully", newUser, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password must be provided",
      });
    }
    const ExistingUser = await User.findOne({ email: email });
    if (!ExistingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    const VerifiedPassword = await bcrypt.compare(
      password,
      ExistingUser.password
    );
    if (!VerifiedPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Password not matched" });
    }
    const token = jwt.sign(
      { userId: ExistingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Sign in successfull",
        token,
        ExistingUser,
      });
  } catch (error) {}
};
module.exports = {
  signUp,
  signIn,
};
