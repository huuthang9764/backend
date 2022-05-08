var db = require("../Dbconnection");

var OrderDetail = {
  getAllOrderDetail: function (callback) {
    return db.query("Select * from order_detail", callback);
  },
  getOrderDetailById: function (id_order, callback) {
    return db.query(
      "select * from order_detail where id_order =?",
      [id_order],
      callback
    );
  },
  addOrderDetail: function (order_detail, callback) {
    return db.query(
      "Insert into order_detail(id_product,quantity,price,total,id_receipt,id_order) values(?,?,?,?,?,?,?)",
      [
        order_detail.id_product,
        order_detail.quantity,
        order_detail.price,
        order_detail.total,
        order_detail.id_receipt,
        order_detail.id_order,
      ],
      callback
    );
  },
  deleteOrderDetail: function (id_order, callback) {
    return db.query(
      "delete from orderr where id_order =?",
      [id_order],
      callback
    );
  },
  updateOrderDetail: function (id_order, order_detail, callback) {
    return db.query(
      "update order_detail set id_product=?,quantity=?,price=?,total=?,id_receipt=? where id_order =?",
      [
        order_detail.id_product,
        order_detail.quantity,
        order_detail.price,
        order_detail.total,
        order_detail.id_receipt,
        id_order,
      ],
      callback
    );
  },
};
module.exports = OrderDetail;
