const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  id: Number,
  email: String,
  password: String,
  firstname: String,
  lastname: String,
  birthday: String,
  profileImage: String
})

module.exports = mongoose.model('User', UserSchema)
