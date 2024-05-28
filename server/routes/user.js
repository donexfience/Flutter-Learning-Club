const express = require("express");
const {
  getAllProudct,
  editProduct,
  addProduct,
} = require("../controller/ProductController");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("hello");
});
router.get("/product", getAllProudct);
router.post("/product/:id", editProduct);
router.post("/product", addProduct);

module.exports = router;
