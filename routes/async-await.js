const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'ascync-await'

router.get('/', function(req, res, next) {
  res.send({
    name: 'async-await',
    server: 'express',
    variableData: variableData
  });
});
let promise1 = Promise.resolve(5);
let promise2 = 44;
let promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array [5, 44, "foo"]
function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
  
  const msg = async function() { //Async Function Expression
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
  
  const msg1 = async () => { //Async Arrow Function
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
  
  msg(); // Message: Hello World! <-- after 2 seconds
  msg1(); // Message: Hello World! <-- after 2 seconds
  function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
  
  msg(); // Message: Hello World! <-- after 2 seconds
  let json = '{ "age": 30 }'; // incomplete data

  try {
    let user = JSON.parse(json); // <-- no errors
    alert( user.name ); // no name!
  } catch (e) {
    alert( "Invalid JSON data!" );
  }
  function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
  
  msg(); // Message: Hello World! <-- after 2 seconds
  module.exports = router;