"use strict";
const { Model } = require("sequelize");
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
        type: Sequelize.NUMBER,
        allowNull: true,
      },
      mealPricing: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      clientName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Meal",
    }
  );
  return Meal;
};
