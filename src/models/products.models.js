const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('../models/users.model');
//const { Users } = require('./index');

const Products = db.define('products', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    availableQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'available_quantity'
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        /* references: {
            model: Users,
            key: 'id'
        } */
    }, 
});

module.exports = Products;