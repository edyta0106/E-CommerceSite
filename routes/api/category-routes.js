const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// http://localhost:3001/api/categories
router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // use join - sequelize -grab all catergories
  try {
    const categoryData = await Category.findAll();
    return res.json(categoryData);
  } catch (error) {
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/categories/(provide id)
router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoriesData = await Category.findByPk(req.params.id);
    res.status(200).json(categoriesData);
  } catch (error) {}
});

// http://localhost:3001/api/categories
router.post("/", (req, res) => {
  // create a new category
});

// http://localhost:3001/api/categories/(provide id)
router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

// http://localhost:3001/api/categories/(provide id)
router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
