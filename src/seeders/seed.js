const db = require('../utils/database');
//const {Users, Order,  Products, Cart , ProductInOrder, ProductInCart } = require('../models');
const Users = require('../models/users.model');
const Products = require('../models/products.models');
const Cart = require('../models/cart.model');
const ProductInOrder = require('../models/productInOrder.model');
const Order = require('../models/order.model');
const ProductInCart = require('../models/productInCart.model');
const initModels = require('../models/initModels');

initModels();

const users = [
    {
        firstname: 'Germán ',
        lastname: 'Silva',
        email: 'ger@hotmail.com',
        password: '123456'
    },
    { 
        firstname: 'Moises', 
        lastname: 'Silva', 
        email: 'msm@email.com', 
        password: '123456', 
    },
    { 
        firstname: 'Diego', 
        lastname: 'Silva', 
        email: 'dsm@email.com', 
        password: '123456', 
    }
];
const cart = [
    {
        userId: 1,
        totalPrice:0
    },
    {
        userId: 2,
        totalPrice:0
    },
    {
        userId: 3,
        totalPrice:0
    },
];
const order = [
    {
        totalPrice: 26400,
        userId: 1,
    },
    {
        totalPrice: 11000,
        userId: 2,
    },
    {
        totalPrice: 15000,
        userId: 3,
    },
]; 
const products = [
    {
        name: 'Guang Full Face Helmet',
        price: 25000,
        availableQuantity: 12,
        userId: 1
    },
    {
        name: 'Bell Bullit Helmet',
        price: 11000,
        availableQuantity: 15,
        userId: 2
    },
    {
        name: 'Simpson Darksome Helmet',
        price: 13000,
        availableQuantity: 9,
        userId: 3
    },
    {
        name: 'Billtwell Baja Gloves',
        price: 1400,
        availableQuantity: 4,
        userId: 3
    },
    {
        name: 'FUEL Rally Raid Gloves',
        price: 2000,
        availableQuantity: 2,
        userId: 2
    },
    {
        name: 'Thrashin Supply Boxer Glove',
        price: 1600,
        availableQuantity: 1,
        userId: 1
    },

];
const productInCart = [
    {
        cartId: 1,
        productId:2,
        quantity: 1,
        price: 11000,
    },
    {
        cartId: 2,
        productId:1,
        quantity: 1,
        price: 25000,
    },
    {
        cartId: 3,
        productId: 5,
        quantity: 1,
        price: 2000,
    },
    {
        cartId: 3,
        productId: 1,
        quantity: 1,
        price: 25000,
    },
];
const productInOrder = [
    {
       orderId: 1,
       productId: 1,
       quantity: 1,
       price: 25000,
    },
    {
        orderId: 1,
        productId: 4,
        quantity: 1,
        price: 1400,
    },
    {
        orderId: 2,
        productId: 2,
        quantity: 1,
        price: 11000,
    },
    {
        orderId: 3,
        productId: 3,
        quantity: 1,
        price: 13000,
    },
    {
        orderId: 3,
        productId: 5,
        quantity: 1,
        price: 2000,
    },
];

db.sync({force: true})
    .then(() => {
        console.log('sync')
        users.forEach( async (users) => await Users.create(users));
        setTimeout(() => {
            products.forEach( async (products) => await Products.create(products))
        }, 100);
        setTimeout(() => {
            cart.forEach( async (cart) => Cart.create(cart))
        }, 200)
        setTimeout(() => {
            order.forEach( async (order) => Order.create(order))
        }, 300); 
        setTimeout(() => {
            productInOrder.forEach( async (productInOrder) => ProductInOrder.create(productInOrder))
        }, 400);
        setTimeout(() => {
            productInCart.forEach( async (productInCart) => ProductInCart.create(productInCart))
        }, 500);
    });