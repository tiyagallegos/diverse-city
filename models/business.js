const mongoose = require('mongoose');
const User = require('./user')
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  busniessName: {type: String, required: true},
  busniessLocation: {type: String, requrired: true},
  busniessTag: {type: String, requrired: true},
  busniessDescription: {type: String, requrired: true},
  busniessReview: {type: Schema.Types.ObjectId, ref:"User"},
  busniessPicture: {type: String, requrired: false},
  busniessPhone: {type: String, requrired: true},
  busniessEmail: {type: String, requrired: true},
  busniessOrgType: {type: String, requrired: true},
  busniessAffiliation: {type: String, required: false},
  busniessWebsite: {type: String, required:false},
  busniessRating: {type: String, required:false},
  businessLogo: {type: String, required:false},
  businessPost: {type: Schema.Types.ObjectId, ref:"Business"},
}, { timestamps: true });

module.exports = mongoose.model('business', businessSchema); 