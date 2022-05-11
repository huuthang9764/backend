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
    console.log(product_category);
    return db.query(
      "INSERT INTO product_category(id_category,name_category,status,url_category)values(?,?,?,?)",
      [
        "",
        "Bàn",
        "1",
        "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-akg-y500-on-ear-wireless-headphones-black-6925281936067-01032019-01-p.jpg",
      ],
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
      "update product_category set name_category=?,status=?,url_category=? where id_category=?",
      [
        product_category.name_category,
        product_category.status,
        product_category.url_category,
        id_category,
      ],
      callback
    );
  },
};

module.exports = Category;
