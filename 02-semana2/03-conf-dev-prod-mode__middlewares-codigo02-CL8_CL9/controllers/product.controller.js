const Product = require('../models/product.model');

exports.findProduct = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.findProductById = async (req, res) => {
  try {
    const { product } = req;
    res.status(200).json({
      status: 'success',
      message: 'The product was find successfully',
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { title, description, quantity, price, categoryId, userId } =
      req.body;
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
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { product } = req;
    const { title, description, quantity, price } = req.body;
    const updatedProduct = await product.update({
      title,
      description,
      quantity,
      price,
    });
    res.status(200).json({
      status: 'success',
      message: 'The product was updated succesfully',
      updatedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { product } = req;
    await product.update({ status: false });
    res.status(200).json({
      status: 'success',
      message: 'Product has been deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};
