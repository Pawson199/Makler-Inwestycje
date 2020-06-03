const router = require('express').Router();
let Data = require('../models/data_model');
const multer  = require('multer');
const fs = require('fs')

require('dotenv').config();

const uri = process.env.ATLAS_URI;
    
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const file_path = '../images'
    cb(null, file_path);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname.replace(/\s/g, '') )
  }
});

var limits = {
  fileSize: 1024 * 1024 * 20
  };

  const upload = multer({ 
    storage: storage,
    limits : limits
   })

  router.route('/').post( upload.array('avatar', 20), (req,res) => {
      const rzuty = []
      const image = []
      req.files.forEach( el => el.filename.includes('rzut') ? rzuty.push(el.path) : image.push(el.path) )
      const nazwa = req.body.offer_name
      const desc = req.body.desc
      const shortdesc = req.body.shortdesc
      const sizes = req.body.sizes
      const prices = req.body.prices
      const data = new Data({
          image,
          rzuty,
          nazwa,
          desc,
          shortdesc,
          sizes,
          prices
     })
     data.save()
    res.json("Dodano ofertę!")
  })

router.route('/').get((req, res) => {
  console.log("xdd")
    Data.find()
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:offer_to_delete').delete((req, res) => {
    Data.find({ nazwa : req.params.offer_to_delete })
      .then(data => { Data.findByIdAndDelete(data, (err, doc) => {
        if(err || !doc ) { res.json("Taka oferta nie istnieje!")}
        else {
          const string_def = "..\\public\\images"
          data[0].image.forEach( el => fs.unlink(el, ()=>{ console.log( 'image deleted' ) }) )
          res.json("Oferta została usunięta") } });
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;

