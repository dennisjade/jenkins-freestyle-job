const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World! 1');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  //process.exit(-1);
});

//process.exit(-1);

module.exports = app;
