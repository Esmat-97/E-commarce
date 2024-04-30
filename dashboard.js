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


app.get('/totalusers',(req,res)=>{

  const query = "SELECT MAX (user_id) FROM users; 	";
  con.query(query, (err, result) => {
    if (err) {
   
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    } else {
        
        console.log(result)
        res.json(result);
    }
});
    
});



app.get('/totalproducts',(req,res)=>{
  
  const query = "SELECT MAX (product_id) FROM products; 	";
  con.query(query, (err, result) => {
    if (err) {
   
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    } else {
   
        res.json(result);
    }
});
    
});



app.get('/currentusers',(req,res)=>{

  const query = "SELECT COUNT (email) FROM users; 	";
  con.query(query, (err, result) => {
    if (err) {
   
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    } else {
   
        res.json(result);
    }
});
    
});



app.get('/admins',(req,res)=>{

  const query = "SELECT COUNT (email) FROM users where role='admin'; 	";
  con.query(query, (err, result) => {
    if (err) {
   
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    } else {
   
        res.json(result);
    }
});
    
});



app.get('/customers',(req,res)=>{

  const query = "SELECT COUNT (email) FROM users where role='customer'; 	";
  con.query(query, (err, result) => {
    if (err) {
   
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    } else {
   
        res.json(result);
    }
});
    
});


app.get('/currentproducts',(req,res)=>{
  
  const query = "SELECT COUNT (product_name) FROM products; 	";
  con.query(query, (err, result) => {
    if (err) {
   
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    } else {
   
        res.json(result);
    }
});
    
});


module.exports = app;