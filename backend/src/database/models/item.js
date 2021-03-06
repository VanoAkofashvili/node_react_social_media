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
      Item.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'user'
      });


      Item.hasOne(models.post, {
        foreignKey: 'itemId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });


      Item.belongsToMany(models.user, {through: 'item_like', as: 'likes'});
    }
  };
  Item.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    itemType: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'item',
  });
  return Item;
};