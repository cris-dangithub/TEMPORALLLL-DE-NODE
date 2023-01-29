const Users = require('../models/users.model');

exports.getAllUsers = async (req, res) => {
  const users = await Users.findAll({
    where: {
      status: 'available',
    },
  });
  res.status(200).json({
    status: 'success',
    message: 'ROUTE - GET',
    users,
  });
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findOne({
    where: {
      id,
      status: 'available',
    },
  });
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User has not been found',
    });
  }
  res.status(200).json({
    status: 'success',
    message: 'ROUTE - GET BY ID',
    user,
  });
};

exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = await Users.create({
    name,
    email,
    password,
    role,
  });
  res.status(201).json({
    status: 'success',
    message: 'User created successfully',
    newUser,
  });
};

exports.updateUserById = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = await Users.findOne({
    where: {
      id,
      status: 'available',
    },
  });
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User has not been found',
    });
  }
  const userUpdated = await user.update({
    name,
    email,
  });
  res.status(200).json({
    status: 'success',
    message: 'User updated successfully',
    userUpdated,
  });
};

exports.deleteUserById = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findOne({
    where: {
      id,
      status: 'available',
    },
  });
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User has not been founded',
    });
  }
  await user.update({
    status: 'unavailable',
  });
  res.status(200).json({
    status: 'success',
    message: 'User has been deleted successfully',
  });
};
