const { Router } = require('express');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');
const { validUserById } = require('../middlewares/user.middlewares');

const route = Router();

route.get('/', getAllUsers);
route.get('/:id', validUserById, getUserById);
route.post('/', createUser);
route.patch('/:id', validUserById, updateUser);
route.delete('/:id', validUserById, deleteUser);

module.exports = {
  userRoute: route,
};
