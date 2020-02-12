const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users",
      [{
        name: "Distribuidora FastFeet",
        email: "admin@fastfeet.com",
        password_hash: bcrypt.hashSync("123456", 8),
        created_at: new Date(),
        updated_at: new Date()
      }],
      {}
    );
  },

  down: () => {}
};
