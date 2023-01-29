const { Router } = require('express');
const {
  findProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

const router = Router();
console.log(router)

router.get('/encontrar/producto/:param1/:param2', findProduct); //! DEJAR ESTO COMO ESTABA NORMAL, solo fue para explicación, yo lo haré en el proximo archivo mejor

router.post('/', createProduct);
router.patch('/', updateProduct);
router.delete('/:id', deleteProduct);
router.put('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - PUT',
  });
});
console.log(router)
module.exports = {
  productRouter: router,
};
