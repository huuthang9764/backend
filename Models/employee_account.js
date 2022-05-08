var db = require("../Dbconnection");

var EmployeeAccount = {
  getAllEmployeeAccount: function (callback) {
    return db.query("Select * from employee_account", callback);
  },
  getEmployeeAccountById: function (id_employee_account, callback) {
    return db.query(
      "select * from employee_account where id_employee_account=?",
      [id_employee_account],
      callback
    );
  },
  addEmployeeAccount: function (employee_account, callback) {
    return db.query(
      "Insert into employee_account(Email,password,name_employee_account,status,permission) values(?,?,?,?,?,?)",
      [
        employee_account.Email,
        employee_account.password,
        employee_account.name_employee_account,
        employee_account.status,
        employee_account.permission,
      ],
      callback
    );
  },
  deleteEmployeeAccount: function (id_employee_account, callback) {
    return db.query(
      "delete from employee_account where id_employee_account=?",
      [id_employee_account],
      callback
    );
  },
  updateEmployeeAccount: function (
    id_employee_account,
    employee_account,
    callback
  ) {
    return db.query(
      "update employee_account set Email=?,password=?,name_employee_account=?,status=?,permission=? where id_employee_account=?",
      [
        employee_account.Email,
        employee_account.password,
        employee_account.name_employee_account,
        employee_account.status,
        employee_account.permission,
        id_employee_account,
      ],
      callback
    );
  },
};
module.exports = EmployeeAccount;
