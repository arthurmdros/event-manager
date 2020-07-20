const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tickets', {
      codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      cod_evento: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tickets');
  },
};
