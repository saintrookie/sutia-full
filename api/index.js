const express = require("express");
var cors = require('cors');
app = express();
const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const ordersRoute = require('./routes/order');



dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('DB CONNECT'))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.static('public'))
app.use('/public/images', express.static(__dirname + '/public/images/'));
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', ordersRoute);




app.listen(process.env.PORT || 5000, () => {
    console.log('server connected');
})