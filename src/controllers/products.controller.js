const ProductServices = require("../services/products.services");


const getProducts = async (req, res, next) => {
    try {
        const stock = await ProductServices.getProducts();
        res.json({stock})
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Something went wrong'
        })
    }
}

const createProduct = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        const newProduct = await ProductServices.create(data);
        res.status(201).json(newProduct)
    } catch (error) {
        next({
            status:400,
            errorContent: error,
            message:'Verify data'
        });
    }
}

module.exports = {
    getProducts,
    createProduct
}