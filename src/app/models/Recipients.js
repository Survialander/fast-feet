import Sequelize from 'sequelize';

class Recipients extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      street: Sequelize.STRING,
      number: Sequelize.INTEGER,
      complement: Sequelize.STRING,
      state: Sequelize.STRING,
      city: Sequelize.STRING,
      cep: Sequelize.FLOAT,
    },
    { 
      sequelize 
    });

    return this;
  }
}

export default Recipients;