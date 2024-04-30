
const express=require('express');
const dashboardRouter = require('./dashboard');
const usersRouter = require('./users');
const productsRouter = require('./products');
const msgsRouter = require('./msgs');


const app=express();
app.use('/dashboard', dashboardRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/msgs', msgsRouter);



const port=8000;




app.listen(port,()=>{
    console.log(`the server listen at posrt http://localhost:${port}`);
    });