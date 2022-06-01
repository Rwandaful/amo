'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  clientHistory.init({
    clientId: DataTypes.NUMBER,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clientHistory',
  });
  return clientHistory;
};