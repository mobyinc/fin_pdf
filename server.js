var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var pdf = require('html-pdf');

app.use(bodyParser.text());

app.post('/html_png', function (req, res) {
  html = req.body;
  res.setHeader('content-type', 'image/png');

  pdf.create(html, { type: 'png' }).toBuffer(function (err, buffer) {
    if (err) {
      res.send("error: " + err);
    } else {
      res.send(buffer);
    }
  });
});

app.post('/html_pdf', function (req, res) {
  html = req.body;
  res.setHeader('content-type', 'application/pdf');

  pdf.create(html, { type: 'pdf' }).toBuffer(function (err, buffer) {
    if (err) {
      res.send("error: " + err);
    } else {
      res.send(buffer);
    }
  });
});

app.listen(80, function () {
  console.log('Example app listening on port 4242!')
});
