const express = require('express');
const app = express();

//Routes
app.get('/', welcome);
app.get('/hello', helloworld);
app.get('/about', about);

//Controllers
function welcome (req, res) {
  res.send('Welcome');
}

function helloworld (req, res) {
    res.send('Hello World');
  }

function about (req, res) {
    res.send('About me');
  }

// Set the port and run the app
app.listen(3000);