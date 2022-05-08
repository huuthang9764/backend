var express = require("express");
var routes_EmployeeAccount = express.Router();
var EmployeeAccount = require("../Models/employee_account");

routes_EmployeeAccount.get("/:id_employee_account?", function (req, res, next) {
  if (req.params.id_employee_account) {
    EmployeeAccount.getEmployeeAccountById(
      req.params.id_employee_account,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } else {
    EmployeeAccount.getAllEmployeeAccount(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
routes_EmployeeAccount.post("/", function (req, res, next) {
  EmployeeAccount.addEmployeeAccount(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});
routes_EmployeeAccount.delete(
  "/:id_employee_account ",
  function (req, res, next) {
    EmployeeAccount.deleteEmployeeAccount(
      req.params.id_employee_account,
      function (err, count) {
        if (err) {
          res.json(err);
        } else {
          res.json(count);
        }
      }
    );
  }
);
routes_EmployeeAccount.put("/:id_employee_account", function (req, res, next) {
  EmployeeAccount.updateEmployeeAccount(
    req.params.id_employee_account,
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

module.exports = routes_EmployeeAccount;
