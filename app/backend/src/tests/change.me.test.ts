import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp from 'chai-http';

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
      .resolves({
          // ...<Seu mock>
          where: { email: 'admin@admin.com' }
        } as unknown as Users);
  });

  after(()=>{
    (Users.findOne as sinon.SinonStub).restore();
  })

  it('Verifica o método POST', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login')
       .send({ email: 'admin@admin.com', password: 'secret_admin' });
    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
