const { getAllProducts } = require('../services/productServices');

const productController = async (_request, response) => {
  const products = await getAllProducts();
  response.status(200).json(products);
};

module.exports = { productController };
