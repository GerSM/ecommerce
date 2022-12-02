const AuthServices = require("../services/auth.services");


const userLogin = async (req, res, next) => {
    try {
        const credentials = req.body;
        const result = await AuthServices.authenticate(credentials);
        if(result){
            const { firstname, lastname, email, id, phone } = result.result;
            const user = { firstname, lastname, email, id, phone };
            const token = AuthServices.getToken(user);
            user.token = token;
            res.json({...user});
        }else{
            res.status(400).json({message: 'Informacion Invalida'})
        }
    } catch (error) {
        next({
            status: 401,
            errorContent: error,
            message: 'Wrong email or password'
        });
    };
};

module.exports = {
    userLogin
}