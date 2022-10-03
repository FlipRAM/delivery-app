require('express-async-errors');
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
const Routes = require('../routes');
const error = require('../middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

Routes(app);

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.static('public'));

app.use(error);

app.get('/coffee', (_req, res) => res.status(418).end()); // ja estava no projeto

module.exports = app;
