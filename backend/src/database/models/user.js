'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        required: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ['client', 'manager', 'admin'],
      },
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeValidate: (user, options) => {
          user.role = user.role || 'client';
        },
      },
    }
  );
  return User;
};

