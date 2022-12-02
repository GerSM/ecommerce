
const { UserServices } = require('../services/users.services');
const transporter = require('../utils/mailer');

const userRegister = async ( req, res, next ) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result) 
        transporter.sendMail({
            from: '<ger9606@gmail.com>',
            to: result.email,
            subject: 'Welcome to BikerShop',
            text: `Hello ${result.firstname} ${result.lastname} Welcome to the BikerShop Online, enjoy the best premium products for bikers`,
            html: `<h2> Hello ${result.firstname} ${result.lastname}</h2> <h3>Welcome to the BikerShop Online, enjoy the best premium products for bikers!!!</h3> <p>Enjoy you rides and ride safe</p>` 
        });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'ha ocurrido un error, por favor verifica la información'
        })
    }
}

module.exports = {
    userRegister
}