const express = require('express')
const cors = require('cors')
const app = express()
const creds = require('./config');
var nodemailer = require('nodemailer');

app.use(cors())
app.use(express.json())

app.listen(4000, () => {
    console.log(`Server is running on port: 4000`);
})



var transport = {
  host: 's66.linuxpl.com',
  port:	587,
  auth: {
    //dont forget to add the creds file
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
    to: 'starnaw1998@interia.pl',  // Change to email address that you want to receive messages on
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