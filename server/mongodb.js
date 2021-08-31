const mongoose = require('mongoose')

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false').then(() => {
    console.log('Mongo DB Connected!!')
  }).catch((error) => {
    console.log(error)
  })
}

module.exports = { connect }
