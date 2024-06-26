const express=require('express');
const mysql=require('mysql');
var bodyParser=require('body-parser');
const cors=require('cors');
const app=express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



const con =  mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'market'
});



app.get('/getproducts',(req,res)=>{

    const query = "SELECT * FROM products INNER JOIN users ON products.user_id=users.user_id;";
    con.query(query, (err, result) => {
      if (err) {
      
          console.error("Error executing query:", err);
          res.status(500).json({ error: "Failed to fetch data" });
      } else {
        
          res.json(result);
      }
  });
      
  });



  app.post('/insertproduct', (req, res) => {
    const { product, image, price , user_id , quantity_in_stock }= req.body;
    const query = 'INSERT INTO products (product_name , image, price , quantity_in_stock, user_id ) VALUES (?,?,?,?,?)';
    con.query(query, [ product, image , price , quantity_in_stock , user_id ], (error, results) => {
  
      if (error) throw error;
      console.log('Data inserted into MySQL');
      res.send('Data inserted into MySQL');
    });
  });



  app.put('/updateproduct', (req, res) => {
    const { id, price } = req.body; 
    const query = 'UPDATE products SET price = ? WHERE product_id = ?';
    con.query(query, [  price , id], (error, results) => {
      if (error) {
        console.error('Error updating user:', error);
        return res.status(500).send('Error updating user');
      }
      console.log('User updated in MySQL');
      res.status(200).send('User updated in MySQL');
    });
  });



  app.delete('/delproduct', (req, res) => {
    const {id}= req.query;
    const query = 'DELETE FROM products WHERE product_id = ?';
    con.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error deleting product:', error);
        return res.status(500).send('Error deleting product');
      }
      console.log('Product deleted from MySQL');
      res.status(200).send('Product deleted from MySQL');
    });
  });


   
  module.exports = app;