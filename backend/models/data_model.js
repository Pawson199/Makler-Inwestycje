
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    image: String,
    nazwa: String,
    desc: String
  });

  const Data = mongoose.model('offer', dataSchema);

module.exports = Data;
