"use strict";

module.exports = function(sequelize, DataTypes) {
  var Assignment = sequelize.define("Assignment", {
    progress: DataTypes.INTEGER,
    comments: DataTypes.STRING
  }, {


    classMethods: {
      associate: function(models) {
      }
    }


  });

  return Assignment;
};



