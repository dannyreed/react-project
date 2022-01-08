const router = require("express").Router();
const Category = require("../models/Category");

// CREATE NEW CATEGORY
router.post("/", async (req,res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL CATS
router.get("/", async (req,res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});


// DELETE CATEGORY
router.delete("/", async (req,res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.body.categoryId);
    res.status(200).json('Successfully deleted category');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a category to a post
router.put("/", async (req,res) => {

});

module.exports = router
