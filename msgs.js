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






app.get('/getmsgs',(req,res)=>{
  const query = "SELECT * FROM  messages;";
  con.query(query, (err, result) => {
    if (err) {
    
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    } else {
      
        res.json(result);
    }
});
    
});





app.post('/insertmsg', (req, res) => {
  const { username ,email , content }= req.body;
  const query = 'INSERT INTO messages ( username ,email , content) VALUES (?,?,?)';
  con.query(query, [ username ,email , content ], (error, results) => {

    if (error) throw error;
    console.log('Data inserted into MySQL');
    res.send('Data inserted into MySQL');
  });
});


module.exports = app;
