const Users = require('../models/users.model');

class UserServices {
    static async create (user) {
        try{
            const result = await Users.create(user)
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = {
    UserServices
};