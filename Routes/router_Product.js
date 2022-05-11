var express = require("express");
var router_Product = express.Router();
var Product = require("../Models/product");
router_Product.get("/:id_product?", function (req, res, next) {
  if (req.params.id_product) {
    Product.getProductById(req.params.id_product, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Product.getAllProduct(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router_Product.post("/", function (req, res, next) {
  Product.addProduct(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router_Product.delete("/:id_product?", function (req, res, next) {
  Product.deleteProduct(req.params["id_product"], function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router_Product.put("/:id_product", function (req, res, next) {
  Product.updateProduct(req.params.id_product, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router_Product;
