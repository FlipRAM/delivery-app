const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  validUser,
  listOfUsers,
  fulanaToken,
  listAfterDeleteId3,
  adminToken,
} = require('../mocks/index');

const { expect } = chai;

chai.use(chaiHttp);

describe('User - Endpoints', () => {
    describe('GET /users', () => {
        it ('should return list of users', async () => {
            const response = await chai.request('http://localhost:3001')
              .get('/users')

            expect(response.status).to.be.equal(200);
            expect(response.body).to.deep.equal(listOfUsers);
        });
    });
    describe('GET /users/sellers', () => {
      it ('should return list of sellers', async () => {
          const response = await chai.request('http://localhost:3001')
            .get('/users/sellers')

          expect(response.status).to.be.equal(200);
          expect(response.body).to.deep.equal([listOfUsers[1]]);
      });
    });
    describe('POST /users/verify', () => {
      it ('should return status 200', async () => {
          const response = await chai.request('http://localhost:3001')
            .post('/users/verify')
            .set('authorization', fulanaToken);

          expect(response.status).to.be.equal(200);
      });
    });
    // describe('DELETE /users/:id', () => {
    //   it ('should return status 201', async () => {
    //       const response = await chai.request('http://localhost:3001')
    //         .delete('/users/3')
    //         .send({token: adminToken});

    //       expect(response.status).to.be.equal(201);
    //       expect(response.body).to.deep.equal(listAfterDeleteId3);
    //   });
    // });
});