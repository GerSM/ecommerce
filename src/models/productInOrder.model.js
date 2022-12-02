const db = require('../utils/database');
const { DataTypes } = require('sequelize');
//const { Order, Products } = require('./index');
const Order = require('../models/order.model');
const Products = require('../models/products.models');

const ProductInOrder = db.define('productInOrder',{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'order_id',
        /* references: {
            model: Order,
            key: 'id'
        } */
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

module.exports = ProductInOrder;