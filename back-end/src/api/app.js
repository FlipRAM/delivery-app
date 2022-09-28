require('express-async-errors');
const express = require('express');
const cors = require('cors');
const loginRouter = require('../routes/loginRoutes');
const registerRouter = require('../routes/registerRoutes');
const productRouter = require('../routes/productRoutes');
const salesRouter = require('../routes/salesRoutes');
const usersRouter = require('../routes/userRoutes');
const salesProductsRouter = require('../routes/salesProductsRoutes');
const error = require('../middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use(loginRouter);
app.use(productRouter);
app.use(registerRouter);
app.use(salesRouter);
app.use(usersRouter);
app.use(salesProductsRouter);
app.use(express.static('public'));

app.use(error);

app.get('/coffee', (_req, res) => res.status(418).end()); // ja estava no projeto

module.exports = app;
