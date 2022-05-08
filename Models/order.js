var db = require("../Dbconnection");

var Order = {
  getAllOrder: function (callback) {
    return db.query("Select * from orderr", callback);
  },
  getOrderById: function (id_order, callback) {
    return db.query(
      "select * from orderr where id_order =?",
      [id_order],
      callback
    );
  },
  addOrder: function (orderr, callback) {
    return db.query(
      "Insert into orderr(order_date,id_user,total,status_order,status_pay) values(?,?,?,?,?,?)",
      [
        orderr.order_date,
        orderr.id_user,
        orderr.total,
        orderr.status_order,
        orderr.status_pay,
      ],
      callback
    );
  },
  deleteOrder: function (id_order, callback) {
    return db.query(
      "delete from orderr where id_order =?",
      [id_order],
      callback
    );
  },
  updateOrder: function (id_order, orderr, callback) {
    return db.query(
      "update orderr set order_date=?,id_user=?,total=?,status_order=?,status_pay=? where id_order =?",
      [
        orderr.order_date,
        orderr.id_user,
        orderr.total,
        orderr.status_order,
        orderr.status_pay,
        id_order,
      ],
      callback
    );
  },
};
module.exports = Order;
