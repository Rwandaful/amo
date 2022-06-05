'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      mealType: {
        type: Sequelize.STRING,
        enum: ['Breakfast', 'Lunch', 'Dinner'],
      },
      mealPricing: {
        type: Sequelize.STRING,
        enum: [
          'subscribed-VIP',
          'subscribed-premium',
          'onetime-Basic',
          'onetime-premium',
        ],
        allowNull: false,
      },
      clientName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Meals');
  },
};

