'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientBalance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  clientBalance.init(
    {
      clientId: DataTypes.NUMBER,
      type: DataTypes.STRING,
      amount: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'ClientBalance',
      tableName: 'client_balances',
    }
  );
  return clientBalance;
};

