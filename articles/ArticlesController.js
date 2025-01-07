const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
  res.send("articles route");
});

router.get("/admin/articles/new", (req, res) => {
  res.send("route for new articles");
});

module.exports = router;
