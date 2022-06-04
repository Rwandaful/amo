'use strict';
const { Model, DATE } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  clientHistory.init(
    {
      clientId: DataTypes.NUMBER,
      actionResult: {
        type: DataTypes.ENUM('INCREASE', 'DECREASE', 'CONSTANT'),
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValueL: 0,
      },
      actionType: {
        type: DataTypes.ENUM('DEPOSIT', 'DEDUCT'),
      },
    },
    {
      sequelize,
      modelName: 'ClientHistory',
      tableName: 'client_history',
      hooks: {
        beforeSave(history, options) {
          if (history.amout < 0) history.actionResult = 'DECREASE';
          else if (history.amount > 0) history.actionResult = 'INCREASE';
          else history.actionResult = 'CONSTANT';
        },
      },
    }
  );
  return clientHistory;
};

