const { Router } = require('express');
const {
  findProduct,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

const router = Router();

router.get('/', findProduct);
router.get('/:id', findProductById);

router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = {
  productRouter: router,
};
