'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item_like extends Model {
    static associate(models) {
    }
  };
  item_like.init({}, {
    sequelize,
    modelName: 'item_like',
    updatedAt: false
  });
  return item_like;
};