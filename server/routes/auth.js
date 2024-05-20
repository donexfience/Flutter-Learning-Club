const express = require("express");
const { signUp, signIn } = require("../controller/authController");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("hello");
});
//mounting routes to the controllers
router.post("/signup", signUp);
router.post('/signin',signIn)



module.exports = router;
