const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Credentials: true")
  next();
});

app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json()) 



const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("***listening on port "+PORT)