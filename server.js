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
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/api/product", router_Product);
app.use("/api/category", router_Category);
app.use("/api/user", router_User);
app.use("/api/employee-account", routes_EmployeeAccount);
app.use("/api/order", router_Order);
app.use("/api/order-detail", router_OrderDetail);
app.use("/api/receipt", router_Receipt);

var server = app.listen(3000, function () {
  console.log("Server listening on port " + server.address().port);
});
module.exports = app;
