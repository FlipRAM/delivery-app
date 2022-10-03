const loginRouter = require('./loginRoutes');
const registerRouter = require('./registerRoutes');
const usersRouter = require('./userRoutes');
const productsRouter = require('./productRoutes');
const salesRouter = require('./saleRoutes');

const Routes = (app) => {
  app.use('/login', loginRouter);
  app.use('/register', registerRouter);
  app.use('/users', usersRouter);
  app.use('/products', productsRouter);
  app.use('/sales', salesRouter);
};

module.exports = Routes;