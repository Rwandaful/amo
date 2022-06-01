"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Clients", {
      name: { type: DataTypes.STRING, allowNull: false },
      college: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.STRING, allowNull: false, defaultValue: 0 },
      regno: { type: DataTypes.STRING, allowNull: true },
      department: { type: DataTypes.STRING, allowNull: true },
      hostelName: { type: DataTypes.STRING, allowNull: true },
      hostelBlock: { type: DataTypes.STRING, allowNull: true },
      hostelRoom: { type: DataTypes.STRING, allowNull: true },
      profilePicture: { type: DataTypes.STRING, allowNull: true },
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
    await queryInterface.dropTable("Clients");
  },
};
