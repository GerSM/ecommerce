const Products = require('../models/products.models')
const Cart = require('../models/cart.model');
const ProductInCart = require('../models/productInCart.model');


class CartServices {
    static async addProductCart(product, res){
        try
        {
            const findProd = await Products.findOne({where: product.productId});
            const findCart = await Cart.findOne({where: {userId: product.userId}})
            const productsObj = {}
            if (findProd && findCart){
                productsObj.cartId = findCart.cartId
                productsObj.productId = product.productId
                productsObj.quantity = product.quantity
                productsObj.price = findProd.price
                productsObj.name = findProd.name
                productsObj.availableQuantity = findProd.availableQuantity
            }else {
                res.status(400).json({error: 'Product unavailable'})
            }
            const addCart = await ProductInCart.create({
                cartId: productsObj.cartId,
                quantity: product.quantity, 
                productId: product.productId,
                price: productsObj.price
            })

            return productsObj;
        } catch (error){
            throw error;
        }
    }

    static async getProdsCart (userId){
        try {
            const cart = await Cart.findOne({
                where: {userId},
                include: {
                    model: ProductInCart,
                }
            });
            return cart;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = CartServices