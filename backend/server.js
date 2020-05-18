const express = require('express')
const cors = require('cors')
const app = express()
const creds = require('./config');
var nodemailer = require('nodemailer');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config();
app.use(cors())
app.use(express.json())

app.listen(4000, () => {
    console.log(`Server is running on port: 4000`);
})


const uri = process.env.ATLAS_URI;
const client = MongoClient(uri,{ useUnifiedTopology: true } )
let dane = []

 client.connect().then( 
   (client) => {
  const db = client.db("offers_1");
  let cursor = db.collection('offers').find({});

   const iterateFunc = (doc) => {
      dane.push(doc.arra)
      console.log(doc)
    }
 
    function errorFunc(error) {
        console.log(error);
    }
 
     cursor.forEach(iterateFunc, errorFunc);
}, client.close() )



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

app.get( '/data', (req,res) => {
  res.json(dane)
} )