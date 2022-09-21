require('express-async-errors');
const express = require('express');
const cors = require('cors');
const loginRouter = require('../routes/loginRoutes');
const error = require('../middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use(loginRouter);

app.use(error);

app.get('/coffee', (_req, res) => res.status(418).end()); // ja estava no projeto

module.exports = app;
