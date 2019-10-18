var mysql = require("mysql");
var inquirer = require("inquirer");

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
    idQuery();
  });
}

function idQuery() {
  inquirer
    .prompt({
      name: "idQuery",
      type: "number",
      message: "Type the ID of the product you want to buy?"
    })
    .then(function(answer) {
      connection.query(
        "SELECT ? FROM bamazon_db.products ",
        {
          id: answer.idQuery
        },
        function(err) {
          if (err) throw err;
          // re-prompt the user for if they want to bid or post
          purchaseAmount();
        }
      );
      // based on their answer, either call the bid or the post functions
    });
}

function purchaseAmount() {
  inquirer
    .prompt({
      name: "purchaseAmount",
      type: "number",
      message: "How many would you like to buy?"
    })
    .then(function(answer) {
      connection.query(
        "SELECT ? FROM bamazon_db.products SUBTRACT ? FROM bamazon_db.products.stock ",
        // put an update thing a ma bob into this
        [{ id: answer.idQuery }, { stock: answer.purchaseAmount }]
      );
      // based on their answer, either call the bid or the post functions
    });
}

// function buyById() {
//   inquirer
//     .prompt({
//       name: "buyById",
//       type: "rawlist",
//       message: "?",
//       choices: ["POST", "BID", "EXIT"]
//     })
//     .then(function(answer) {
//       // based on their answer, either call the bid or the post functions
//       if (answer.postOrBid === "POST") {
//         postAuction();
//       } else if (answer.postOrBid === "BID") {
//         bidAuction();
//       } else {
//         connection.end();
//       }
//     });
// }

// function howMany() {}
