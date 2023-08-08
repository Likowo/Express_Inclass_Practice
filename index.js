// Load express
const express = require('express');

// Create our express app
const app = express();

const foods = [
    ' eggs',
    'milk',
    'fish',
    'meat',
    'pasta',
    'tomatoes',
    'avocado',
    'apple',
    'pears',
    'mushrooms'
]

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
// app.get('/', function (req, res) {
//   res.send('<h1>Hello World!</h1>');
// });

// Mount routes
app.get('/', function(req, res) {
    res.send('<h1>Hello Express</h1>');
  });
app.get('/:indexOfFoodsArray', (req, res) => {
    if(foods[req.params.indexOfFoodsArray]){
        res.send(foods[req.params.indexOfFoodsArray]);
    } else {
        res.send(`<h1> foods doesn't have index ${req.params.indexOfFoodsArray} </h1>`)
    }
    
  });


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3001, function () {
  console.log('Listening on port 3001');
});

// Now run the app by typing, node server, in the terminal
// Then Browsing to localhost:3000 will hit our app's root route that we defined and return "Hello World!".

//Next step is; Go to server.js file and type in  functions for the Basic structure of Express App

