const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  listOfUsers,
  fulanaToken,
  listAfterDeleteId5,
  adminToken,
  validUser,
} = require('../mocks/index');
const app = require('../../api/app');
const { userList } = require('../../services/userServices');

const { expect } = chai;

chai.use(chaiHttp);

describe('User - Endpoints', () => {
    describe('GET /users', () => {
        it ('should return list of users', async () => {
            const response = await chai.request(app)
              .get('/users')

            expect(response.status).to.be.equal(200);
            expect(response.body).to.deep.equal(listOfUsers);
        });
    });
    describe('GET /users/sellers', () => {
      it ('should return list of sellers', async () => {
          const response = await chai.request(app)
            .get('/users/sellers')

          expect(response.status).to.be.equal(200);
          expect(response.body).to.deep.equal([listOfUsers[1]]);
      });
    });
    describe('POST /users/verify', () => {
      it ('should return status 200', async () => {
          const response = await chai.request(app)
            .post('/users/verify')
            .set('authorization', fulanaToken);

          expect(response.status).to.be.equal(200);
      });
    });
    describe('POST /users', () => {
      it ('should return status 200', async () => {
          const response = await chai.request(app)
            .post('/users')
            .set('authorization', adminToken)
            .send({
              name: 'alo',
              email: 'testando@testando.com',
              password: '1234556',
            });

          expect(response.status).to.be.equal(201);
      });
    });
    describe('POST /users', () => {
      it ('should return status 409 when user already exists', async () => {
          const response = await chai.request(app)
            .post('/users')
            .set('authorization', adminToken)
            .send({
              name: 'Fulana Pereira',
              email: 'fulana@deliveryapp.com',
              password: 'fulana@123',
            });

          expect(response.status).to.be.equal(409);
          expect(response.body).to.be.deep.equal({ message: 'Usuário ja cadastrado' })
      });
    });
    describe('POST /users', () => {
      it ('should return status 401 when user not authorized', async () => {
          const response = await chai.request(app)
            .post('/users')
            .set('authorization', fulanaToken)
            .send({
              name: 'alofdsafsd',
              email: 'testandofsdafsdf@testando.com',
              password: '1234556',
            });

          expect(response.status).to.be.equal(401);
          expect(response.body).to.be.deep.equal({ message: 'Usuário nao autorizado' })
      });
    });
    describe('DELETE /users/:id', () => {
      it ('should return status 201', async () => {
          const response = await chai.request(app)
            .delete('/users/5')
            .send({token: adminToken});

          expect(response.status).to.be.equal(201);
          expect(response.body).to.deep.equal(listAfterDeleteId5);
      });
    });
    describe('DELETE /users/:id', () => {
      it ('should return status 403 when not authorized', async () => {
          const response = await chai.request(app)
            .delete('/users/5')
            .send({token: fulanaToken});

          expect(response.status).to.be.equal(403);
      });
    });


    describe('POST /users/verify', () => {
      it ('should return status 201', async () => {
          const response = await chai.request(app)
            .delete('/users/verify')
            .set('authorization', 'hfdusflahfuhebfabseifeyufgbaiufhusd');

          expect(response.status).to.be.equal(405);
      });
    });
});