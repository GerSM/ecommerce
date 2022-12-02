const {Users, Order,  Products, Cart, ProductInOrder, ProductInCart} = require('./index');

const initModels = () => {
    Order.belongsTo(Users, { as: 'purchase', foreignKey: 'user_id' });
    Users.hasMany(Order, { as: 'order', foreignKey: 'user_id' });
    
    Cart.belongsTo(Users, { foreignKey: 'user_id' });
    Users.hasOne(Cart, { foreignKey: 'user_id' });

    //!no es necesaria 
    Products.belongsTo(Users, { foreignKey: 'user_id' }); 
    Users.hasMany(Products, { foreignKey: 'user_id' });
    //! i think so!

    Order.belongsToMany(Products, { through: 'productInOrder' });
    Products.belongsToMany(Order, { through: 'productInOrder' });
    
    Products.belongsToMany(Cart, { through: 'productInCart' });
    Cart.belongsToMany(Products, { through: 'productInCart' });
    
    ProductInOrder.belongsTo(Products);
    Products.hasMany(ProductInOrder);
    ProductInOrder.belongsTo(Order/* , { foreignKey: 'order_id' } */);
    Order.hasMany(ProductInOrder/* , { foreignKey: 'order_id' } */);

    ProductInCart.belongsTo(Products);
    Products.hasMany(ProductInCart);
    ProductInCart.belongsTo(Cart);
    Cart.hasMany(ProductInCart);
};

module.exports = initModels;