var express = require("express");
var router_Order = express.Router();
var Order = require("../Models/order");

router_Order.get("/:id_order?", function (req, res, next) {
  if (req.params.id_order) {
    Order.getOrderById(req.params.id_order, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Order.getAllOrder(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router_Order.post("/", function (req, res, next) {
  Order.addOrder(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});
router_Order.delete("/:id_order ", function (req, res, next) {
  Order.deleteOrder(req.params.id_order, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router_Order.put("/:id_order", function (req, res, next) {
  Order.updateOrder(req.params.id_order, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router_Order;
