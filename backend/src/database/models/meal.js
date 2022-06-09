'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meal.init(
    {
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      mealPricing: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      clientName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Meal',
    }
  );
  return Meal;
};

