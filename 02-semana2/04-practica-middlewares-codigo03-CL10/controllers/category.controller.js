const Category = require('../models/category.model');

exports.findCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      where: {
        status: true,
      },
    });
    res.json({
      status: 'success',
      message: 'ROUTE - GET',
      categories,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.findCategory = async (req, res) => {
  try {
    const { category } = req;
    res.status(200).json({
      status: 'success',
      message: 'The category was find successfully',
      category,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.create({
      name,
    });
    res.status(201).json({
      status: 'success',
      message: 'ROUTE - POST',
      newCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { category } = req;
    const updateCategory = await category.update({
      name,
    });
    res.status(200).json({
      status: 'success',
      message: 'The category was updated succesfully',
      updateCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { category } = req;
    await category.update({ status: false });
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
