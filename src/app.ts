import express, { Application } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import passport from 'passport';
import * as http from 'http';
import '@lib/passport';
import IndexRoutes from '@routes/index.routes';
import UserRoutes from '@routes/user.routes';
import AuthRoutes from '@routes/auth.routes';
import BrandRoutes from '@routes/Products/brand.routes';
import StoreRoutes from '@routes/Products/store.routes';
import UnitRoutes from '@routes/Products/unit.routes';
import CategoryRoutes from '@routes/Products/category.routes';
import ProductRoutes from '@routes/Products/producto.routes';
import { boomErrorHandler, errorHandler, logErrors } from '@lib/helpers';
import ClsDBConexion from '@class/ClsBDConexion';
import ClsRol from '@class/ClsRol';
import ClsUser from '@class/ClsUser';
import ClsBrand from '@class/Products/ClsBrand';
import ClsCategory from '@class/Products/ClsCategory';
import ClsUnit from '@class/Products/ClsUnit';
import ClsStore from '@class/Products/ClsStore';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface User {
      id: number;
      name: string;
      lastname: string;
      email: string;
      password: string;
      status: boolean | number;
      rol_id: number;
      rol: {
        id: number;
        name: 'Administrador' | 'Usuario';
      };
    }
  }
}

class App {
  private app: Application;

  private server!: http.Server;

  private port?: number | string;

  constructor(port?: number | string) {
    this.port = port;
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  async closeApp() {
    this.server.close();
    await ClsDBConexion.endConnection();
  }

  getApi() {
    return this.app;
  }

  // Settings
  async settings() {
    dotenv.config();
    this.app.set('port', this.port || process.env.PORT || 4000);
    await ClsRol.createInitialRols();
    await ClsStore.initValues();
    await ClsBrand.initValues();
    await ClsUnit.initValues();
    await ClsCategory.initValues();
    await ClsUser.creatingAdminUser();
  }

  // Middlewares
  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(passport.initialize());
    this.app.use(express.static(path.join(__dirname, '/public')));
    this.app.use(express.static(path.join(__dirname, '/public/build')));
  }

  // Routes
  routes() {
    this.app.use('/api/v1/user/', UserRoutes);
    this.app.use('/api/v1/auth/', AuthRoutes);
    this.app.use('/api/v1/product/', ProductRoutes);
    this.app.use('/api/v1/brand/', BrandRoutes);
    this.app.use('/api/v1/unit/', UnitRoutes);
    this.app.use('/api/v1/category/', CategoryRoutes);
    this.app.use('/api/v1/store/', StoreRoutes);
    this.app.use(IndexRoutes);
    this.app.use(logErrors);
    this.app.use(errorHandler);
    this.app.use(boomErrorHandler);
  }

  async listen() {
    this.server = await this.app.listen(this.app.get('port'));
    console.log('Server on port ', this.app.get('port'));
    return this.server;
  }
}

export default App;
