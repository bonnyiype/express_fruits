const express = require('express');
const PORT = process.env.PORT || 3008;
const app = express();


// Start the server

app.listen (PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

//Adding Basic Routes

app.get('/heloo', (req, res)=> {
 console.log('hello express')
 res.send("Hello Express")

})

// /greet/:name

app.get('/greet/:name', (req, res)=> {
  const name = req.params.name;
  res.send(`Hello ${name}`)
 
 })

//  /five
//  GET /five should return an array of the numbers from 1-5

app.get('/five', (req, res)=> {
  const numbers = [1,2,3,4,5];
  res.send(numbers)
 
 });

//  /fruits
// GET /fruits should return an array with all the fruits.


app.get('/fruits', (req, res)=> {
  const fruits = ['apple', 'banana', 'melon', 'pear', 'mango'];
  res.send(fruits);
 
 });

//  fruits/:name
// Now let's add a route that takes a route parameter name and retrieves the fruit that matches the supplied name.
//HINT - you can use a higher-order array method to find the fruit that matches the name.

// app.get('/fruits/:name', (req, res)=> {

//   const fruits = ['apple', 'banana', 'melon', 'pear', 'mango'];
//   const fruit = req.params.name;  
//   if (fruits.includes(fruit)) {
//     res.send(fruit);
//   } else {
//     res.send('Not Found');
//   }

//});
 
// GET /fruits/sort should return the fruits array sorted alphabetically using .sort().

app.get('/fruits/sort', (req, res)=> {

  const fruits = ['apple', 'banana', 'melon', 'pear', 'mango'];
  const sortedFruits = fruits.sort();
  console.log(sortedFruits)
  res.send(sortedFruits);
 
 });


 // This route handler matches all HTTP GET requests to any route
app.get('*', (req, res) => {
  res.send('404 Not Found')
})
