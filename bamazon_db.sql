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
  (10,2) NOT NULL,
    stock_quantity INT
  NULL,
  PRIMARY KEY
  (id)
);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Rocks", "Landscape", 2.50, 100),
    ("Chocolate", "Food", 3.10, 120),
    ("Ipad", "Electronics", 3.10, 120),
    ("Television", "Electronics", 3.10, 120),
    ("Scarves", "Clothing", 3.10, 120),
    ("Socks", "Clothing", 3.10, 120),
    ("Jean Jackets", "Clothing", 3.10, 120),
    ("Chairs", "Furniture", 3.10, 120),
    ("Water Bottle", "Food", 3.10, 120),
    ("Coffee", "Food", 3.10, 120),
    ("Altoids", "Food", 3.10, 120);


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
