'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      college: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false },
      phone: { type: Sequelize.STRING, allowNull: false },
      amount: { type: Sequelize.STRING, allowNull: false, defaultValue: 0 },
      regno: { type: Sequelize.STRING, allowNull: true },
      department: { type: Sequelize.STRING, allowNull: true },
      hostelName: { type: Sequelize.STRING, allowNull: true },
      hostelBlock: { type: Sequelize.STRING, allowNull: true },
      hostelRoom: { type: Sequelize.STRING, allowNull: true },
      profilePicture: { type: Sequelize.STRING, allowNull: true },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clients');
  },
};

