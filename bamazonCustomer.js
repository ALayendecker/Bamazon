var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "VintheMistborn08!",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT id, product_name, price FROM products", function(
    err,
    res
  ) {
    const transformed = res.map(function(obj) {
      delete obj.index;
      return obj;
    });

    if (err) throw err;
    console.table(transformed);
    connection.end();
  });
}
