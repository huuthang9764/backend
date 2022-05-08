var express = require("express");
var router_User = express.Router();
var User = require("../Models/user");

router_User.get("/:id_user?", function (req, res, next) {
  if (req.params.id_user) {
    User.getUserById(req.params.id_user, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    User.getAllUser(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router_User.post("/", function (req, res, next) {
  User.addUser(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});
router_User.delete("/:id_user ", function (req, res, next) {
  User.deleteUser(req.params.id_user, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router_User.put("/:id_user", function (req, res, next) {
  User.updateUser(req.params.id_user, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router_User;
