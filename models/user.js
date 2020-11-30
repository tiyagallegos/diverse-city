const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const business = require('./business');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  userName: {type: String, required: true, unique: true},
  email: {type: String, required: true, lowercase: true, unique: true},
  bio: {type: String, required: true},
  avatar: {type: String, required: false},
  businessAffiliation: {type: Boolean},
  bussinessID: {type: Schema.Types.ObjectId, ref: "Business", required:false},
  password: {type: String, required: false},
}, {
  timestamps: true
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre('save', function(next) {
  // this refereces the current document
  const user= this;
  if(!user.isModified('password')) return next();
  bcrypt.hash(user.password,   SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    //replace the user's password with hash
    user.password = hash;
    next();
  })
})

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb)
}

module.exports = mongoose.model('User', userSchema);