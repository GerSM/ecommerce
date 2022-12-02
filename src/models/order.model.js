const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('../models/users.model');
//const { Users } = require('./index');

const Order = db.define('order', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        field: 'total_price',
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
    status: {
        type: DataTypes.ENUM('complete', 'pending'),
        defaultValue: 'pending'
    }
});

module.exports = Order;