'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Item.belongsTo(models.user);
      Item.hasOne(models.Post);
      Item.hasOne(models.Photo);
      Item.belongsToMany(models.User, {through: 'liked_items'});
      Item.belongsToMany(models.User, {through: 'items_comments'});
    }
  };
  Item.init({
    entityId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};