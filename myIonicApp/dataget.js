const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const router=express.Router();


const con =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'market'
    });

router.get('/getusers',(req,res)=>{
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
  
  
  
  router.get('/getproducts',(req,res)=>{
    const query = "SELECT * FROM  products";
    con.query(query, (err, result) => {
      if (err) {
      
          console.error("Error executing query:", err);
          res.status(500).json({ error: "Failed to fetch data" });
      } else {
        
          res.json(result);
      }
  });
      
  });
  
  