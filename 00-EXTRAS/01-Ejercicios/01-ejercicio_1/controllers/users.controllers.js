const Users = require('../models/users.model');

exports.getAllUsers = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal Server Error',
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal Server Error',
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // Verificar que el usuario no exista
    const user = await Users.findOne({
      where: {
        email,
      },
    });
    if (user && user.status === 'unavailable') {
      await user.update({ status: 'available' });
      return res.status(200).json({
        status: 'success',
        message:
          'The user already existed but was disabled, so the account was successfully enabled',
      });
    }
    if (user) {
      return res.status(400).json({
        status: 'error',
        message: `The user email already exists. Please try another email.`,
      });
    }
    // Crear usuario
    const newUser = await Users.create({
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      password,
      role: role.toLowerCase(),
    });
    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal Server Error',
    });
  }
};

exports.updateUserById = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal Server Error',
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal Server Error',
    });
  }
};
