var db = require("../Dbconnection");

var Product = {
  getAllProduct: function (callback) {
    return db.query("Select * from product", callback);
  },
  getProductById: function (id_product, callback) {
    return db.query(
      "select * from product where id_product=?",
      [id_product],
      callback
    );
  },
  addProduct: function (body, callback) {
    return db.query(
      "Insert into product(name_product,description,price,status,quantity,id_category) VALUES(?,?,?,?,?,?)",
      [
        body.name_product,
        body.description,
        body.price,
        body.status,
        body.quantity,
        body.id_category,
      ],
      callback
    );
  },
  deleteProduct: function (id_product, callback) {
    return db.query(
      "delete from product where id_product=?",
      [id_product],
      callback
    );
  },
  updateProduct: function (id_product, product, callback) {
    return db.query(
      "update product set name_product=?,description=?,price=?,status=?,quantity=?,id_category=? where id_product=?",
      [
        product.name_product,
        product.description,
        product.price,
        product.status,
        product.quantity,
        product.id_category,
        id_product,
      ],
      callback
    );
  },
};
module.exports = Product;
