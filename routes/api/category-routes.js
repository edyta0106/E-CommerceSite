const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// http://localhost:3001/api/categories
router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // use join - sequelize -grab all catergories
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    return res.json(categoriesData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// http://localhost:3001/api/categories/(provide id)
router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoriesData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    return res.status(200).json(categoriesData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// http://localhost:3001/api/categories
router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoriesData = await Category.create(req.body);
    return res.status(200).json(categoriesData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// http://localhost:3001/api/categories/(provide id)
router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoriesData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json(categoriesData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// http://localhost:3001/api/categories/(provide id)
router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const catergoriesData = await Category.destroy({
      where: { id: req.params.id },
    });
    return res.status(200).json(catergoriesData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
