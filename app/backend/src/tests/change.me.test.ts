import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
// import chaiHttp from 'chai-http';
import chaiHttp = require('chai-http');
// @ts-ignore
import jwt = require('jsonwebtoken');

import { app } from '../app';
// import Example from '../database/models/ExampleModel';
import Users from '../database/models/Users';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica a rota Login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Users, "findOne")
      .onFirstCall()
      .resolves(
          // ...<Seu mock>
          {
            id: 1,
            username: 'Admin',
            role: 'admin',
            email: 'admin@admin.com',
            password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
          } as unknown as Users)
      .onSecondCall()
      .resolves(null);
    
    sinon.stub(jwt, 'sign').resolves("123.456.789");
  });

  after(()=>{
    (Users.findOne as sinon.SinonStub).restore();
    (jwt.sign as sinon.SinonStub).restore();
  })

  it('Verifica o método POST quando os dados são corretos', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login')
       .send({ email: 'admin@admin.com', password: 'secret_admin' });
    // console.log(chaiHttpResponse);
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(
      {
        "user": {
          "id": 1,
          "username": "Admin",
          "role": "admin",
          "email": "admin@admin.com"
        },
        "token": "123.456.789"
      }
    );
  });

  it('Verifica se é possível efetuar o login com email inválido', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({ email: 'admin.com', password: 'secret_admin' });
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'Incorrect email or password' });
  })

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
