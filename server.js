var express = require("express");
var bodyparser = require("body-parser");

var connection = require("./Dbconnection");

var router_Category = require("./Routes/router_Category");
const router_User = require("./Routes/router_User");
const routes_EmployeeAccount = require("./Routes/router_EmployeeAccount");
const router_Product = require("./Routes/router_Product");
const router_Order = require("./Routes/router_Order");
const router_OrderDetail = require("./Routes/router_OrderDetail");
const router_Receipt = require("./Routes/router_Receipt");

var app = express();
const cors = require("cors");
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/api/product", cors(), router_Product);
app.use("/api/category", cors(), router_Category);
app.use("/api/user", cors(), router_User);
app.use("/api/employee-account", cors(), routes_EmployeeAccount);
app.use("/api/order", cors(), router_Order);
app.use("/api/order-detail", cors(), router_OrderDetail);
app.use("/api/receipt", cors(), router_Receipt);

var server = app.listen(3000, function () {
  console.log("Server listening on port " + server.address().port);
});
module.exports = app;
