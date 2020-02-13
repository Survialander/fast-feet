'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cep: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipients');
  }
};
