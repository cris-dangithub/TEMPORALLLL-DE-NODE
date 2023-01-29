const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: true,
      },
    });
    res.json({
      status: 'success',
      message: 'ROUTE - GET',
      users,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { user } = req;
    res.status(200).json({
      status: 'success',
      message: 'ROUTE - GET BY ID',
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password,
    });
    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { user } = req;
    await user.update({ username, email, password });
    res.json({
      status: 'success',
      message: 'User was updated successfully',
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { user } = req;
    await user.update({ status: false });
    res.json({
      status: 'success',
      message: 'The user has been deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};
