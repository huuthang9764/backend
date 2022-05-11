var express = require("express");
var router_Category = express.Router();
var Category = require("../Models/categry");

router_Category.get("/:id_category?", function (req, res, next) {
  if (req.params.id_category) {
    Category.getCategoryById(req.params.id_category, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Category.getAllCategory(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router_Category.post("/", function (req, res, next) {
  Category.addCategory(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});
router_Category.delete("/:id_category ", function (req, res, next) {
  Category.deleteCategory(req.params["id_category "], function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router_Category.put("/:id_category", function (req, res, next) {
  Category.updateCategory(
    req.params.id_category,
    req.body,
    function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    }
  );
});

module.exports = router_Category;
