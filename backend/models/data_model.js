
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    image: [String],
    rzuty: [String],
    nazwa: String,
    desc: String,
    shortdesc: String,
    sizes: String,
    prices: String
  });

  const Data = mongoose.model('offer', dataSchema);

module.exports = Data;
