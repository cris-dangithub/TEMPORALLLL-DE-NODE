const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
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
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'The user has not been found',
    });
  }
  res.status(200).json({
    status: 'success',
    message: 'ROUTE - GET BY ID',
    user,
  });
};

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  // AUN NO HEMOS VISTO VALIDACIONES, ASI QUE TENEMOS QUE MANDAR BIEN LOS DATOS:
  // if (!(username && email && password)) {
  //   return res.status(400).json({
  //     status: 'error',
  //     message: 'You have not sending all data',
  //   });
  // }

  const newUser = await User.create({
    username,
    email,
    password,
  });

  res.status(201).json({
    status: 'success',
    message: 'User created successfully',
    newUser,
  });
};

exports.updateUser = async (req, res) => {
  const { username, email, password } = req.body;
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id,
      status: true,
    },
  });
  await user.update({ username, email, password });
  res.json({
    status: 'success',
    message: 'User was updated successfully',
    user,
  });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'The user has not been found',
    });
  }
  await user.update({ status: false });
  res.json({
    status: 'success',
    message: 'The user has been deleted successfully',
  });
};
