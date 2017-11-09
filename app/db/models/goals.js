'use strict';
module.exports = (sequelize, DataTypes) => {
  var Goals = sequelize.define('Goals', {
    name: DataTypes.STRING,
    period: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Goals;
};