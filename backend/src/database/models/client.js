'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Client.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      college: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
      regno: { type: DataTypes.STRING, allowNull: true },
      department: { type: DataTypes.STRING, allowNull: true },
      hostelName: { type: DataTypes.STRING, allowNull: true },
      hostelBlock: { type: DataTypes.STRING, allowNull: true },
      hostelRoom: { type: DataTypes.STRING, allowNull: true },
      profilePicture: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: 'Client',
      tableName: 'clients',
    }
  );
  return Client;
};

