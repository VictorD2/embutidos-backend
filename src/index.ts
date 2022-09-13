import App from '@src/app';
import ClsDBConexion from '@class/ClsBDConexion';

// force = dev
// alter = Prod

async function main() {
  try {
    ClsDBConexion.flag = 1;
    await ClsDBConexion.connectSequelize();
    await ClsDBConexion.sequelize.sync();
    const app = new App();
    await app.listen();
  } catch (error) {
    console.log(error);
  }
}

main();
