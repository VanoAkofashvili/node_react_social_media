'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class followers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      followers.belongsTo(models.user, {foreignKey: 'userId'});
      followers.belongsTo(models.user, {foreignKey: 'followerId'});
    }
  };
  followers.init({
    userId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user'
      }
    },
    followerId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user'
      }
    }
  }, {
    sequelize,
    modelName: 'followers',
    timestamps: true,
    updatedAt: false,
  });
  return followers;
};