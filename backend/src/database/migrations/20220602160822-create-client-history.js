'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('client_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientId: {
        type: Sequelize.INTEGER,
      },

      actionResult: {
        type: Sequelize.ENUM('INCREASE', 'DECREASE', 'CONSTANT'),
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValueL: 0,
      },
      actionType: {
        type: Sequelize.ENUM('DEPOSIT', 'DEDUCT'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('client_histories');
  },
};

