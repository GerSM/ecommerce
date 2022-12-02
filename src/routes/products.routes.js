const {Router} = require('express');
const authenticate = require('../middlewares/auth.middleware');
const {getProducts, createProduct} = require('../controllers/products.controller');

const router = Router();

router.get('/products', authenticate, getProducts);
router.post('/products/create', authenticate, createProduct)

module.exports = router;