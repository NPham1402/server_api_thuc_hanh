const express=require("express")
const app=express()
const catogory=require("./api/routers/category")
const furniture=require("./api/routers/Furniture")
app.use("/api/category",catogory)
app.use("/api/furniture",furniture)
module.exports=app;