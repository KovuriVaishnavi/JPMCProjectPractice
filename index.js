const express=require('express');
const app=express();
require('dotenv').config()
const port=process.env.PORT;
const recipeRoutes=require('./routes/routes.recipe');
app.use(recipeRoutes)

const cors = require('cors')
app.use(cors())
app.listen(port)



//establishing mongodb connection
const mongoose =require('mongoose');
mongoose.connect("mongodb://localhost:27017/Recipejp").then(()=>{
    console.log("connection successful")
}).catch(()=>{
    console.log("connection unsuccessful")
})
