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
    var element={}
    element.id=doc.id
    element.
    element.arraylist=doc.data().arraylist
  //  console.log(element)
   array.push(element)
  })
   }
   console.log(array)
   res.status(200).send(array)
  }
const getalldata =async (req, res, next) => {
  const users= await db.collection('Furniture')
  const snapshot=await users.get();
  const array1=[5]
  const array=[]
  if(snapshot.empty)
  {res.status(404).send({message:"Khong co du lieu"})}
  else{
  snapshot.forEach(doc => {
    var element2=[]
    element2.name=doc.data().name
    element2.img=doc.data().img
    element2.description=doc.data().description
    var element={}
    element.id=[]
    element.id=doc.id
    element.chitiet=[]
    element.chitiet.push([element2.name,element2.description,element2.img])
  //  console.log(element)
   array.push(element)
  })
   }
   console.log(array)
   res.status(200).send(array)
  }
app.get('/',(req, res) => {
  res.status(200).send("zkvjihresithbetsj")
})
app.get("/api/2",getalldata2)
app.get("/api/1",getalldata)
app.listen(port,()=>{
  console.log("Turn on server");
})














