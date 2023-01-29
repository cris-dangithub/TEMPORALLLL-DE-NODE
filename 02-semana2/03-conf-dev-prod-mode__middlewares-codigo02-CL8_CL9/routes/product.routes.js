const { Router } = require('express');
const {
  findProduct,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');
const { validProductById } = require('../middlewares/product.middlewares');

const router = Router();

router.get('/', findProduct);
router.get('/:id', validProductById, findProductById);

router.post('/', createProduct);
router.patch('/:id', validProductById, updateProduct);
router.delete('/:id', validProductById, deleteProduct);

module.exports = {
  productRouter: router,
};
