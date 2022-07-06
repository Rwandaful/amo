'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientBalance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Client, { foreignKey: 'clientId' });
    }
  }
  clientBalance.init(
    {
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ClientBalance',
      tableName: 'client_balances',
    }
  );
  return clientBalance;
};

