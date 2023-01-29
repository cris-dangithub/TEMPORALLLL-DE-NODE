const { Router } = require('express');
const {
  createUserAccount,
  loginUser,
  getAllUserTransfers,
} = require('../controllers/users.controllers');

const router = Router();

router.post('/signup', createUserAccount);
router.post('/login', loginUser);
router.get('/:id/history', getAllUserTransfers);

module.exports = {
  usersRouter: router,
};
