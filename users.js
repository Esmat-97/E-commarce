
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


app.get('/select', (req, res) => {
    const { email, password } = req.query;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    con.query(query, [email, password], (error, results) => {
      if (error) {
        console.error('Error executing the query:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
     
      res.json(results);
    });
  });
  
  
  
  
  app.get('/getusers',(req,res)=>{
  
    const query = "SELECT * FROM  users";
    con.query(query, (err, result) => {
      if (err) {
     
          console.error("Error executing query:", err);
          res.status(500).json({ error: "Failed to fetch data" });
      } else {
     
          res.json(result);
      }
  });
      
  });



  app.post('/insert', (req, res) => {
    const { username , email , password} = req.body;
    const query = 'INSERT INTO users (username, email , password) VALUES (?,?,?)';
    con.query(query, [ username , email , password], (error, results) => {
      if (error) throw error;
      console.log('Data inserted into MySQL');
      res.send('Data inserted into MySQL');
    });
  });
  
  

  app.delete('/deluser', (req, res) => {
    const {id}= req.query;
    const query = 'DELETE FROM users WHERE user_id = ?';
    con.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error deleting product:', error);
        return res.status(500).send('Error deleting product');
      }
      console.log('Product deleted from MySQL');
      res.status(200).send('Product deleted from MySQL');
    });
  });



  app.put('/updateuser', (req, res) => {
    const { id, name } = req.body; 
    const query = 'UPDATE users SET username = ? WHERE user_id = ?';
    con.query(query, [  name , id], (error, results) => {
      if (error) {
        console.error('Error updating user:', error);
        return res.status(500).send('Error updating user');
      }
      console.log('User updated in MySQL');
      res.status(200).send('User updated in MySQL');
    });
  });
  
  module.exports = app;