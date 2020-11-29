const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
  story: {type: String, required: true},
  createdBy: {type: Schema.Types.ObjectId, ref:"User"},
}, { timestamps: true });

module.exports = mongoose.model('story', storySchema);