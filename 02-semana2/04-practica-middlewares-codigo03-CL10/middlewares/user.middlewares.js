const { updateDeletedUserByEmail } = require('../controllers/user.controller');
const User = require('../models/user.model');

exports.validUserById = async (req, res, next) => {
  try {
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
        message: 'User has not been found',
      });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.validIfExistUserEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });

    // Validar si el usuario existe y si tiene un estado en false... Si es así, actualizar el estado a true
    if (user && !user.status) {
      await user.update({ status: true });
      return res.status(200).json({
        status: '???',
        message: `The user exists but his account is disabled. The account has already been activated`,
      });
    }

    // Validar si existe el usuario
    if (user) {
      return res.status(400).json({
        status: 'error',
        message: `The user's email already exists`,
      });
    }

    //Si no existe, ir al siguiente middleware
    next();
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal Server Error',
    });
  }
};
