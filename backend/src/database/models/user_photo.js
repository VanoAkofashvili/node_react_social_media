'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserPhoto.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }

  }, {
    sequelize,
    modelName: 'user_photo',
    timestamps: false,
  });
  return UserPhoto;
};