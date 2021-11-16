const express = require("express");
const router = express.Router();
const admin=require("./database");
 const db=admin.firestore();
var data
const getalldata =async (req, res, next) => {
  const users= await db.collection('Furniture')
  const snapshot=await users.get();
  const array=[]
  
  if(snapshot.empty)
  {res.status(404).send({message:"Khong co du lieu"})}
  else{
  snapshot.forEach(doc => {
    var element={}
    element.id=doc.id
    element.name=doc.data().name
    element.img=doc.data().img
    element.description=doc.data().description
    var temp={
      phanchia:[]
    }
    temp.phanchia.push(element)
    array.push(temp)
  }
  )

   }
 
   console.log(array)
   res.status(200).json(array)
  }
 router.get("/",getalldata)
module.exports=router;


