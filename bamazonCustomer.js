//globals
require("dotenv").config();
var keys = require("./keys.js");
var mysql = require("mysql");
var inquirer = require("inquirer");
var stockCheck;
// var keys = key.password;
// console.log(keys.password);
var connection = mysql.createConnection(keys);

//connecting to the db
connection.connect(function(err) {
  if (err) throw err;
  initConnection();
});

//showing the table for the items for sale
function initConnection() {
  connection.query("SELECT id, product_name, price FROM products", function(
    err,
    res
  ) {
    //trying to get the console.table to not show index
    // const transformed = res.map(function(obj) {
    //   delete obj.index;
    //   return obj;
    // });
    if (err) {
      console.log(err);
    }
    for (let i = 0; i < res.length; i++) {
      res[i].price = res[i].price.toFixed(2);
    }

    console.table(res);
    // console.table(transformed);
    startBuy();
  });
}

// starting the product purchasing
function startBuy() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "id",
        message: "Type the ID of the product you want to buy?"
      },
      {
        type: "number",
        name: "stock_quantity",
        message: "Type the amount you would like to buy?"
      }
    ])
    .then(function(answer) {
      connection.query(
        "SELECT stock_quantity FROM products WHERE id = ? ",
        [answer.id],
        function(err, res) {
          if (err) {
            console.log(err);
          }
          stockCheck = res[0].stock_quantity;
          if (stockCheck < answer.stock_quantity) {
            stockChecking();
          } else {
            connection.query(
              "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ? ",
              [answer.stock_quantity, answer.id],
              function(err) {
                if (err) {
                  console.log(err);
                }
                //I never would have thought of this thank you Kala
                transPrice(answer.id, answer.stock_quantity);
              }
            );
          }
        }
      );
    });
}

//trying to make a reciept
function transPrice(id, amount) {
  connection.query("SELECT price FROM products WHERE id = ? ", [id], function(
    err,
    res
  ) {
    if (err) {
      console.log(err);
    }
    console.log(
      //reciept for amount of items and price?
      "Thank you for your purchase. Your total is for " +
        amount +
        "X item ID:" +
        id +
        " is $" +
        (res[0].price * amount).toFixed(2)
    );
    buyAgain();
  });
}

function stockChecking() {
  inquirer
    .prompt({
      name: "NoStock",
      type: "list",
      message: "Sorry we do not have enough of that item in stock.",
      choices: ["Keep Shopping?", "Leave"]
    })
    .then(function(answer) {
      if (answer.NoStock === "Keep Shopping?") {
        startBuy();
      }
      if (answer.NoStock === "Leave") {
        connection.end();
      }
    });
}

function buyAgain() {
  inquirer
    .prompt({
      name: "buyAgain",
      type: "list",
      message: "Would you like to purchase anything else?",
      choices: ["Keep Shopping", "Leave"]
    })
    .then(function(answer) {
      if (answer.buyAgain === "Keep Shopping") {
        startBuy();
      }
      if (answer.buyAgain === "Leave") {
        connection.end();
      }
    });
}
