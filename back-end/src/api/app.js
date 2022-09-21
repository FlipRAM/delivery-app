require("express-async-errors")
const express = require('express');
const error = require("../middleware/errorMiddleware");
const loginRouter = require('../routes/loginRoutes');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())

app.use(loginRouter)

app.use(error)



app.get('/coffee', (_req, res) => res.status(418).end()); // ja estava no projeto

module.exports = app;
