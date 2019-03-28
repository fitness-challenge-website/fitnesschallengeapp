const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require("morgan");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./server/routes')(app);

//app.get('*', (req, res) => res.status(200).send({
//  message: "Hello World"
//}));

app.listen(3210, ()=>{
  console.log('Server @port 3210!');
});

module.exports = app;
