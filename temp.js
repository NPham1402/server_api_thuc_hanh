
const fs = require('fs');

let rawdata = fs.readFileSync('.json');
let data = JSON.parse(rawdata);
console.log(student);
 //  async function read(){
// const users= await db.collection('users')
// const snapshot=await users.get();
// snapshot.forEach(doc => {
//   console.log(doc.id, '=>', doc.data());
// })
// //const liam=await db.collection('users').doc('nguyen').get()
// if (users.exists) {
//   console.log('No document');
//  } else {
//   console.log(users.data());
//  }
//  }
//  read()

//  const fs = require('fs');

//  let rawdata = fs.readFileSync('.json');
//  let data = JSON.parse(rawdata);
// //start();
// async function start() {
// // Add a new document in collection "cities" with ID 'LA'
// const res = await db.collection('cities').doc('LA').set(data);}
// start()