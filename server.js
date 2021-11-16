const http=require("http");
const express=require("express")
const app=express()
const admin= require("./database");
const db=admin.firestore();
const port=process.env.PORT || 5000
const getalldata2 =async (req, res, next) => {
  const users= await db.collection('category')
  const snapshot=await users.get();
  const array=[]
  if(snapshot.empty)
  {res.status(404).send({message:"Khong co d lieu"})}
  else{
  snapshot.forEach(doc => {
    var chiaphan={}
    chiaphan.id=doc.id
    chiaphan.img=doc.data().img
    chiaphan.name=doc.data().name
    chiaphan.arraylist=doc.data().arraylist
  //  console.log(element)
   array.push(chiaphan)
  })
   }
   console.log(array)
   res.status(200).send(array)
  }
const getalldata =async (req, res, next) => {
  const users= await db.collection('Furniture')
  const snapshot=await users.get();
  var array=[]
  if(snapshot.empty)
  {res.status(404).send({message:"Khong co du lieu"})}
  else{
  snapshot.forEach(doc => {
    var chiaphan={}
    chiaphan.id=doc.id
    chiaphan.description=doc.data().description
    chiaphan.img=doc.data().img
    chiaphan.name=doc.data().name
   array.push(chiaphan)
  })
   }
   console.log(array)
   res.status(200).send(array)
  }
app.get('/',(req, res) => {
  res.status(200).send("connected")
})
app.get("/api/category",getalldata2)
app.get("/api/furniture",getalldata)
app.listen(port,()=>{
  console.log("Turn on server");
})














