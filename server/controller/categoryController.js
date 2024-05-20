const Category = require("../model/cateogoryModel");
const createCategory = async (req, res) => {
  try {
    const { title, description, imageURL } = req.body;
    if (!title || !description || !imageURL) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const newCategory = new Category({
      title,
      description,
      imageURL,
    });
    await newCategory.save();
    res
      .status(200)
      .json({ success: true, message: "Category created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getCateogry = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getCateogryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    res.status(200).json({ success: true, category });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Sever error" });
  }
};

module.exports = {
  getCateogry,
  getCateogryById,
  createCategory,
};
