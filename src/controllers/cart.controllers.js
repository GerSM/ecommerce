//service

const CartServices = require("../services/cart.services");

const addToCart = async (req, res, next) => {
    try {
        const {userId} = req.params
        const {productId, quentity} = req.body
        const product = {userId: Number(userId), productId, quentity}
        const result = await CartServices.addProductCart(product, res)
        res.json(result);
    } catch (error) {
        next({
            status: 404,
            errorContent: error,
            message: 'Something Went Wrong'
        });
    }
};

const getAllProductsInCart = async (req, res, next) => {
    try {
        const {userId} = req.params
        const result = await CartServices.getProdsCart(userId)
        res.json(result)
    } catch (error) {
        next({
            status: 404,
            errorContent: error,
            message: 'Something Went Wrong'
        })
    }
}

module.exports = {
    addToCart,
    getAllProductsInCart
};