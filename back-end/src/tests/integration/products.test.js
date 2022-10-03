const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  listOfProducts,
} = require('../mocks/index');
const app = require('../../api/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('Products - Endpoints', () => {
    describe('GET /products/customer', () => {
        it ('should return list of products', async () => {
            const response = await chai.request(app)
              .get('/products/customer')

            expect(response.status).to.be.equal(200);
            expect(response.body).to.deep.equal(listOfProducts);
        });
    });
});