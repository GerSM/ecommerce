const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname : {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    hooks: {
        beforeCreate: (user, options) => {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 8);
            user.password = hash;
        },
    }
});

module.exports = Users;