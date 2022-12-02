const db = require('../utils/database');
const { DataTypes } = require('sequelize');
//const { Cart, Products }  = require('./index');
const Cart = require('../models/cart.model');
const Products = require('../models/products.models');

const ProductInCart = db.define('productInCart', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'cart_id',
        references: {
            model: Cart,
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'product_id',
        references: {
            model: Products,
            key: 'id'
        }  
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
});

module.exports = ProductInCart;