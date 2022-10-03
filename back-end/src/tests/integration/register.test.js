const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  listOfUsers,
  fulanaToken,
  listAfterDeleteId3,
  adminToken,
} = require('../mocks/index');
const app = require('../../api/app');
const { validUser } = require('../mocks');

const { expect } = chai;

chai.use(chaiHttp);

describe('Register - Endpoints', () => {
  describe('POST /register', () => {
      it ('should return status 201', async () => {
          const response = await chai.request(app)
            .post('/register')
            .send({
              email: "test@test.com",
              password: "aloaloalo",
              name: 'Test'
            })

          expect(response.status).to.be.equal(201);
          expect(response.body).to.deep.equal('');
      });
  });
  describe('POST /register', () => {
    it ('should return status 409', async () => {
        const response = await chai.request(app)
          .post('/register')
          .send(validUser)

        expect(response.status).to.be.equal(409);
        expect(response.body).to.deep.equal({
          message: 'Conflict, Usuário ja cadastrado'
        });
    });
});
});