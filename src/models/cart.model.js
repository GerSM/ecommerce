const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('../models/users.model');
//const { Users } = require('./index');

const Cart = db.define('cart', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
            model: Users,
            key: 'id'
        }
    },
    totalPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: 'total_price',
    }
});

module.exports = Cart;