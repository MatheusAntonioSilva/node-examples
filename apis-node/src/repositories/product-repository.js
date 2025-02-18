const Product = require('../app/models/product')
const Category = require('../app/models/category')

exports.create = async(data) => {
  const category = new Category()
  category.description = data.category.description  
  await category.save()
  
  const product = new Product()
  product.name = data.name
  product.price = data.price
  product.description = data.description
  product.category = category

  return await product.save() 
}

exports.all = async() => { return await Product.find() }

exports.findById = async(id) => { return await Product.findById(id) }

exports.update = async(id, data) => {
  return await Product.findById(id, async(error, product) => {
    
    if(error) { return }

    const category = new Category()
    category.description = data.category.description  
    await category.save()
  
    product.name = data.name
    product.price = data.price
    product.description = data.description
    product.category = category

    await product.save()  

    return product
  })
}

exports.delete = async(id) => { return await Product.findByIdAndRemove(id) }

