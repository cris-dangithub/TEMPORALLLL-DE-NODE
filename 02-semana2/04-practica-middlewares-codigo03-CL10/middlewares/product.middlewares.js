const Product = require('../models/product.model');

exports.validProductById = async (req, res, next) => {
  try {
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
    req.product = product;
    next();
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};
