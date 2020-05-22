const router = require('express').Router();
let Data = require('../models/data_model');
const multer  = require('multer');

require('dotenv').config();
const uri = process.env.ATLAS_URI;
    
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './folder/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname.replace(/\s/g, '') )
  }
});
  const upload = multer({ storage: storage })

  router.route('/').post( upload.single('avatar'), (req,res) => {
      const image = req.file.path
      const nazwa = req.body.offer_name
      const desc = req.body.desc

      console.log(req.file)
      const dupa = new Data({
         image,
        nazwa,
        desc
     })
      dupa.save()
    res.json("Files uploaded")
  })

router.route('/').get((req, res) => {
    Data.find()
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;

