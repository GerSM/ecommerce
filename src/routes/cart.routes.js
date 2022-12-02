const {Router} = require('express');
const { addToCart, getAllProductsInCart } = require('../controllers/cart.controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post('/cart/:userId', authenticate, addToCart);
router.get('/cart/products/:userId', authenticate, getAllProductsInCart);

module.exports = router