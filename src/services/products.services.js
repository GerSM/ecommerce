const { token } = require('morgan');
const Products = require('../models/products.models');
const Users = require('../models/users.model');


class ProductServices {
    static async getProducts(){
        try {
            const result = await Products.findAll({
                attributes:{
                    exclude: ['createdAt', 'updatedAt']
                },
                include:{
                    model: Users,
                    attributes: ['firstname', 'lastname']
                }
            });
            const stock = []
            result.map((product) => {
                if(product.availableQuantity > 0){
                    stock.push(product)
                }else{
                    return 'Something went wrong, problably empty'
                }
            });
            return stock;
        } catch (error) {
            throw error;
        }
    }

    static async create (data) {
        try {
            const newProduct = await Products.create(data);
            return newProduct;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = ProductServices;