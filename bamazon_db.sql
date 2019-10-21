DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
  id INT NOT NULL
  AUTO_INCREMENT,
  product_name VARCHAR
  (45) NULL,
  department_name VARCHAR
  (45) NULL,
    price
  DECIMAL
  (10,2) NOT NULL,
    stock_quantity INT
  NULL,
  PRIMARY KEY
  (id)
);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Rocks", "Landscape", 5.57, 100),
    ("Chocolate", "Food", 6.15, 120),
    ("Ipad", "Electronics", 320.99, 75),
    ("Television", "Electronics", 895.10, 120),
    ("Scarves", "Clothing", 19.55, 120),
    ("Socks", "Clothing", 8.95, 120),
    ("Jean Jackets", "Clothing", 75.15, 120),
    ("Chairs", "Furniture", 125.77, 120),
    ("Water Bottle", "Food", 1.25, 120),
    ("Coffee", "Food", 12.00, 120),
    ("Altoids", "Food", 1.75, 120);


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
