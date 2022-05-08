var db = require("../Dbconnection");

var Category = {
  getAllCategory: function (callback) {
    return db.query("Select * from product_category", callback);
  },
  getCategoryById: function (id_category, callback) {
    return db.query(
      "select * from product_category where id_category =?",
      [id_category],
      callback
    );
  },
  addCategory: function (product_category, callback) {
    return db.query(
      "Insert into product_category(name_category,status) values(?,?)",
      [product_category.name_category, product_category.status],
      callback
    );
  },
  deleteCategory: function (id_category, callback) {
    return db.query(
      "delete from product_category where id_category=?",
      [id_category],
      callback
    );
  },
  updateCategory: function (id_category, product_category, callback) {
    return db.query(
      "update product_category set name_category=?,status=? where id_category=?",
      [product_category.name_category, product_category.status, id_category],
      callback
    );
  },
};

module.exports = Category;
