const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");

router.get("/articles", (req, res) => {
  res.send("articles route");
});

router.get("/admin/articles/new", (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/articles/new", { categories });
  });
});

module.exports = router;
