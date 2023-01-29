const { Router } = require('express');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const route = Router();

route.get('/', getAllUsers);
route.get('/:id', getUserById);
route.post('/', createUser);
route.patch('/:id', updateUser);
route.delete('/:id', deleteUser);

module.exports = {
  userRoute: route,
};
