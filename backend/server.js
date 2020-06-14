const express = require('express')
const cors = require('cors')
const app = express()
const creds = require('./config');
var nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const path = require('path')

app.get('/admin', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
app.get('/oferta', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
app.get('/kontakt', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/oferta/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const dotenv = require('dotenv').config();
app.use(cors())
app.use(express.json())

app.listen(5000, () => {
    console.log(`Server is running on port: 5000`);
})

var transport = {
  host: 's66.linuxpl.com',
  port:	587,
  auth: {
    //dont forget to add creds file
  user: creds.USER,
  pass: creds.PASS
}
}

var transporter = nodemailer.createTransport(transport)

 app.post('/send', (req, res, next) => {
  var email = req.body.email
  var message = req.body.message
  var content = `E-mail klienta: ${email} \n Wiadomość: ${message} `

  var mail = {
    from: "kontakt@makler-inwestycje.pl",
    to: 'starnaw1998@interia.pl', 
    subject: 'Wiadomość kontaktowa ze strony Makler-Inwestycje',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
      console.log(err)
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

app.post('/check_data', (req, res, next) => { 
    if( req.body.login === process.env.LOGIN && req.body.password === process.env.PASSWORD )
    {res.send("true")}
    else{
      res.send("false")
    }
})

app.post('/islogged', (req, res, next) => { 
  if( req.body.login === process.env.LOGIN && req.body.password === process.env.PASSWORD )
  {res.send("true")}
  else{
    res.send("false")
  }
})

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  );
  const connection = mongoose.connection;
  connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
  })
  
const dataRouter = require('./routes/data')
app.use( '/data', dataRouter )
