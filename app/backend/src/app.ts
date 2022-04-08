import * as express from 'express';
import * as cors from 'cors';
import userController from './controllers/userController';
import authToken from './middlewares/authToken';
import clubsController from './controllers/clubsController';
import matchsController from './controllers/matchsController';
import tokenValidate from './middlewares/tokenValidate';

// https://medium.com/@pmhegdek/oop-in-typescript-express-server-d9368b97740e

class App {
  public app: express.Express;
  // ...

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.config();
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.post('/login', userController.login);
    this.app.get('/login/validate', authToken.validateToken);
    this.app.get('/clubs', clubsController.findAll);
    this.app.get('/clubs/:id', clubsController.findById);
    this.app.get('/matchs', matchsController.findAll);
    this.app.post('/matchs', tokenValidate.tokenValidate, matchsController.saveMatch);
    this.app.patch('/matchs/:id/finish', matchsController.finished);
    // ...
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Rodando em http://localhost:${PORT}/`));
  }
}

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();

export { App };
