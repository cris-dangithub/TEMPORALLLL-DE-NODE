const { Router } = require('express');
const { check } = require('express-validator');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');
const {
  validUserById,
  validIfExistUserEmail,
} = require('../middlewares/user.middlewares');
const { validateFields } = require('../middlewares/validateField.middlewares');

const route = Router();

route.get('/', getAllUsers);
route.get('/:id', validUserById, getUserById);
route.post(
  '/',
  [
    check('username', 'The username must be mandatory').not().isEmpty(),
    check('email', 'The email must be mandatory').not().isEmpty(),
    check('email', 'The email must be a correct format').isEmail(),
    check('password', 'The password must be a correct format').not().isEmail(),
    validateFields,
    validIfExistUserEmail,
  ],
  createUser
);
route.patch('/:id', validUserById, updateUser);
route.delete('/:id', validUserById, deleteUser);

module.exports = {
  userRoute: route,
};
