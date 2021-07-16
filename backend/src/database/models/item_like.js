'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item_like extends Model {
    static associate(models) {
    }
  };
  item_like.init({
    s: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'item_like',
  });
  return item_like;
};