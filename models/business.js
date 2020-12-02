const mongoose = require('mongoose');
const User = require('./user')
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  name: {type: String, required: true},
  location: {type: String, requrired: true},
  tag: {type: String, requrired: true},
  description: {type: String, requrired: true},
  review: {type: Schema.Types.ObjectId, ref:"User"},
  picture: {type: String, requrired: false},
  contactPhone: {type: String, requrired: true},
  contactEmail: {type: String, requrired: true},
  organizationType: {type: String, requrired: true},
  affiliation: {type: String, required: false},
  website: {type: String, required:false},
  busniessRating: {type: String, required:false},
  businessLogos: {type: String, required:false},
}, { timestamps: true });

module.exports = mongoose.model('business', businessSchema); 