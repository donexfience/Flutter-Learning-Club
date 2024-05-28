const Product = require("../model/productModel");

// Create a new product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, brand, stock, images } =
      req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      brand,
      stock,
      images,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

// Edit an existing product
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, brand, stock, images } =
      req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        category,
        brand,
        stock,
        images,
        lastUpdated: Date.now(),
      },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

const getAllProudct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getAllProudct,
  editProduct,
  addProduct,
};
