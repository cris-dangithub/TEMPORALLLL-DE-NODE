const User = require('../models/user.model');

exports.getAllUsers = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - GET',
  });
};

exports.getUser = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - GET BY ID',
  });
};

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = await User.create({
    username,
    email,
    password,
  });
  res.status(201).json({
    status: 'success',
    message: 'ROUTE - POST',
    user: { newUser },
  });
};

exports.updateUser = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - PATCH',
  });
};

exports.deleteUser = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - DELETE',
  });
};
