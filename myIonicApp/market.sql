CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) ,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    role ENUM ('customer','admin') DEFAULT 'customer'
);
select * from users ;
insert into users (username ,email , password  ) values ('mohamed','mohamed@yahoo','555');



CREATE TABLE products (
    product_id INT auto_increment PRIMARY KEY,
    product_name VARCHAR(100),
     image varchar(50),
    price DECIMAL(10, 2),
    quantity_in_stock INT ,
    user_id int,
    FOREIGN KEY  (user_id)  REFERENCES users (user_id)
);


 drop table products;

select * from products ;
insert into products (product_name ,price , quantity_in_stock, user_id ) values ('headphone',5.8,100,10);

 SET SQL_SAFE_UPDATES = 0;
 delete from users;