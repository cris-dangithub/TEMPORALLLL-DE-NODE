const { Router } = require('express');
const {
  getAllMotorcyclePendingList,
  getPendingMotorcycletById,
  createAppointment,
  updateStatusRepair,
  cancelRepair,
} = require('../controllers/repairs.controllers');

const router = Router();

router.get('/', getAllMotorcyclePendingList);
router.get('/:id', getPendingMotorcycletById);
router.post('/', createAppointment);
router.patch('/:id', updateStatusRepair);
router.delete('/:id', cancelRepair);

module.exports = {
  repairsRouter: router,
};
