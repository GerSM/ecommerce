const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const db = require('./utils/database')
const handleError = require("./middlewares/error.middleware");
const initModels = require('./models/initModels');
const userRoutes = require('./routes/users.routes')
const transporter = require('./utils/mailer');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes') 

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

initModels();

db.authenticate()
    .then(() => console.log("Atenthication success"))
    .catch((error) => console.log(error));

db.sync({force: false})
    .then(() => console.log("Db Sync"))
    .catch((error) => console.log(error));

transporter
    .verify()
    .then(() => console.log('Ready to send mails'));

app.get('/', (req, res) => {
    console.log('welcome')
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', cartRoutes);

app.use(handleError);

module.exports = app;

