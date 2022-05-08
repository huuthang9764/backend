var db = require("../Dbconnection");

var User = {
  getAllUser: function (callback) {
    return db.query("Select * from user", callback);
  },
  getUserById: function (id_user, callback) {
    return db.query("select * from user where id_user=?", [id_user], callback);
  },
  addUser: function (user, callback) {
    return db.query(
      "Insert into user(user_name,password,full_name,email_user,address,status) values(?,?,?,?,?,?,?)",
      [
        user.user_name,
        user.password,
        user.full_name,
        user.email_user,
        user.address,
        user.status,
      ],
      callback
    );
  },
  deleteUser: function (id_user, callback) {
    return db.query("delete from product where id_user=?", [id_user], callback);
  },
  updateUser: function (id_user, user, callback) {
    return db.query(
      "update user set user_name=?,password=?,full_name=?,email_user=?,address=?,status=? where id_user=?",
      [
        user.user_name,
        user.password,
        user.full_name,
        user.email_user,
        user.address,
        user.status,
        id_user,
      ],
      callback
    );
  },
};
module.exports = User;
