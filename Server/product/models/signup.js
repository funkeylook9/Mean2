'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Signup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Signup.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.INTEGER,
    password: DataTypes.STRING,
    conformPassword: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Signup',
    freezeTableName: true
  });
  return Signup;
};