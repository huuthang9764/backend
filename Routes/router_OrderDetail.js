var express = require("express");
var router_OrderDetail = express.Router();
var OrderDetail = require("../Models/order_detail");
router_OrderDetail.get("/:id_order?", function (req, res, next) {
  if (req.params.id_order) {
    OrderDetail.getOrderDetailById(req.params.id_order, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    OrderDetail.getAllOrderDetail(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router_OrderDetail.post("/", function (req, res, next) {
  OrderDetail.addOrderDetail(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router_OrderDetail.delete("/:id_order", function (req, res, next) {
  OrderDetail.deleteOrderDetail(req.params.id_order, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router_OrderDetail.put("/:id_order", function (req, res, next) {
  OrderDetail.updateOrderDetail(
    req.params.id_order,
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
module.exports = router_OrderDetail;
