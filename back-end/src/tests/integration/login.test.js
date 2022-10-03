const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  validLogin,
} = require('../mocks/index');
const app = require('../../api/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('Login - Endpoints', () => {
    describe('POST /login', () => {
      it ('should return the user', async () => {
          const response = await chai.request(app)
            .post('/login')
            .send(validLogin)

          expect(response.status).to.be.equal(200);
          expect(response.body.email).to.deep.equal(validLogin.email);
      });
    });
    describe('POST /login', () => {
      it ('should return error when user not found', async () => {
          const response = await chai.request(app)
            .post('/login')
            .send({
              email: 'aloalo@test.com',
              password: 'aloalo',
            })

          expect(response.status).to.be.equal(404);
      });
    });
});