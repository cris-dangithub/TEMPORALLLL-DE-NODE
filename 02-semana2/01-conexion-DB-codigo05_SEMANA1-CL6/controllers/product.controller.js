const Product = require('../models/product.model');

exports.findProduct = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - GET',
  });
};

exports.findProductById = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - GET BY ID',
  });
};

exports.createProduct = async (req, res) => {
  const { title, description, quantity, price, categoryId, userId } = req.body;
  const newProduct = await Product.create({
    title,
    description,
    quantity,
    price,
    categoryId,
    userId,
  });
  res.status(201).json({
    status: 'success',
    message: 'ROUTE - POST',
    newProduct,
  });
};

exports.updateProduct = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - PATCH',
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  res.json({
    status: 'success',
    message: 'ROUTE - DELETE',
    id,
  });
};
