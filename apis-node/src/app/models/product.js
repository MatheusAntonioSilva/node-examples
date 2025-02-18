const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
})

module.exports = mongoose.model('Product', productSchema)
