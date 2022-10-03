const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  listOfUsers,
  fulanaToken,
  listAfterDeleteId3,
  adminToken,
} = require('../mocks/index');
const app = require('../../api/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('Sales - Endpoints', () => {
  describe('GET /sales/customer', () => {
    it ('should return list of sales', async () => {
          const response = await chai.request(app)
          .get('/sales/customer')

          expect(response.status).to.be.equal(200);
          expect(response.body).to.deep.equal([]);
        });
      });
  
  describe('GET /sales/customer/1', () => {
    it ('should return sale in specific', async () => {
      const response = await chai.request(app)
      .get('/sales/customer/1')
      
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(null);
    });
  });

  describe('GET /sales/customer/1/orders', () => {
    it ('should return status 200 with correct list', async () => {
      const response = await chai.request(app)
      .get('/sales/customer/1/orders')
      
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal([]);
    });
  });
  
  describe('GET /sales/seller/:id/orders', () => {
    it ('should return status 200 with correct list', async () => {
      const response = await chai.request(app)
      .get('/sales/seller/2/orders')
      
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal([]);
    });
  });
  
  describe('GET /sales/:id', () => {
    it ('should return status 200 with correct sale', async () => {
      const response = await chai.request(app)
      .get('/sales/1')

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(null);
    });
  });
  
  describe('PUT /sales/:id', () => {
    it ('should throw error and return status 404', async () => {
        const response = await chai.request(app)
          .put('/sales/1')

        expect(response.status).to.be.equal(200);
      });
    });

    describe('POST /sales/customer', () => {
      it ('should throw error and return status 501', async () => {
          const response = await chai.request(app)
            .post('/sales/customer')
            .send({
              saleObj: {
                sellerId: 2,
                deliveryAddress: 'av. asuhasuah',
                deliveryNumber: '5',
                status: 'pendente',
                totalPrice: 30.00
              },
              products: [{id: 2,quantity: 2},{id: 3,quantity: 2}]
            })
            .set('authorization', fulanaToken);
    
          expect(response.status).to.be.equal(201);
      });
    });
  });