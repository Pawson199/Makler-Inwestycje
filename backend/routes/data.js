const router = require('express').Router();
let Data = require('../models/data_model');
const multer  = require('multer');
const fs = require('fs')

require('dotenv').config();

const uri = process.env.ATLAS_URI;
    
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const file_path = `./folder`
    cb(null, file_path);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname.replace(/\s/g, '') )
  }
});
  const upload = multer({ storage: storage })

  router.route('/').post( upload.array('avatar', 8), (req,res) => {
      const image = req.files.map( el => el.path )
      const nazwa = req.body.offer_name
      const desc = req.body.desc
      const data = new Data({
          image,
          nazwa,
          desc
     })
     data.save()
    res.json("Files uploaded")
  })



router.route('/').get((req, res) => {
    Data.find()
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;

