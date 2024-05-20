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

