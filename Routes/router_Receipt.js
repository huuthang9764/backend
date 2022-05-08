var express = require("express");
var router_Receipt = express.Router();
var Receipt = require("../Models/receipt");

router_Receipt.get("/:id_receipt?", function (req, res, next) {
  if (req.params.id_receipt) {
    Receipt.getReceiptById(req.params.id_receipt, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Receipt.getAllReceipt(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router_Receipt.post("/", function (req, res, next) {
  Receipt.addReceipt(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});
router_Receipt.delete("/:id_receipt ", function (req, res, next) {
  Receipt.deleteReceipt(req.params.id_receipt, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router_Receipt.put("/:id_receipt", function (req, res, next) {
  Receipt.updateReceipt(req.params.id_receipt, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router_Receipt;
