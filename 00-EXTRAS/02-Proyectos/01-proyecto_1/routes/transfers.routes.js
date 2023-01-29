const { makeTransfer } = require('../controllers/transfers.controllers');
const { Router } = require('express');
const router = Router();

router.post('/', makeTransfer);

module.exports = {
  transfersRouter: router,
};
