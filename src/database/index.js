import Sequelize from 'sequelize';
import config from '../config/database';

class Database {
  contructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();