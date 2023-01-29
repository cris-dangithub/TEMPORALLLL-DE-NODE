const Product = require('../models/product.model');

exports.findProduct = async (req, res) => {
  const product = await Product.findAll({
    where: {
      status: true,
    },
  });
  res.json({
    status: 'success',
    message: 'ROUTE - GET',
    product,
  });
};

exports.findProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: 'The product was not found',
    });
  }
  res.status(200).json({
    status: 'success',
    message: 'The product was find successfully',
    product,
  });
};

exports.createProduct = async (req, res) => {
  const { title, description, quantity, price, categoryId, userId } = req.body;
  const newProduct = await Product.create({
    title: title.toLowerCase(),
    description: description.toLowerCase(),
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

exports.updateProduct = async (req, res) => {
  const { title, description, quantity, price } = req.body;
  const { id } = req.params;

  const product = await Product.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: 'The product was not found',
    });
  }
  const updateProduct = await product.update({
    title,
    description,
    quantity,
    price,
  });
  res.status(200).json({
    status: 'success',
    message: 'The product was updated succesfully',
    updateProduct,
  });
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: 'Product was not found',
    });
  }
  await product.update({ status: false });
  res.status(200).json({
    status: 'success',
    message: 'Product has been deleted successfully',
  });
};
