const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require('../controllers/users.controllers');

const { Router } = require('express');

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/:id', updateUserById);
router.delete('/:id', deleteUserById);

module.exports = {
  usersRouter: router,
};
