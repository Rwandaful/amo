'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pricing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pricing.init(
    {
      name: DataTypes.STRING,
      about: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Pricing',
      tableName: 'pricings',
    }
  );
  return pricing;
};

