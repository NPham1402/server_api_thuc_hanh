const express = require("express");
const router = express.Router();
const admin= require("./database");
const db=admin.firestore();
const getalldata =async (req, res, next) => {
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
   router.get("/",getalldata)
module.exports=router;

