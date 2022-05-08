var db = require("../Dbconnection");

var Receipt = {
  getAllReceipt: function (callback) {
    return db.query("Select * from receipt", callback);
  },
  getReceiptById: function (id_receipt, callback) {
    return db.query(
      "select * from receipt where id_receipt =?",
      [id_receipt],
      callback
    );
  },
  addReceipt: function (receipt, callback) {
    return db.query(
      "Insert into receipt(id_order,status,total) values(?,?,?)",
      [receipt.id_order, receipt.status, receipt.total],
      callback
    );
  },
  deleteReceipt: function (id_receipt, callback) {
    return db.query(
      "delete from receipt where id_receipt=?",
      [id_receipt],
      callback
    );
  },
  updateReceipt: function (id_receipt, receipt, callback) {
    return db.query(
      "update receipt set id_order=?,status=?,total=? where id_receipt=?",
      [receipt.id_order, receipt.status, receipt.total, id_receipt],
      callback
    );
  },
};

module.exports = Receipt;
