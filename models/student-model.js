"use strict";

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {


    classMethods: {
      associate: function(models) {
        Student.hasMany(models.Assignment)
      }
    }


  });

  return Student;
};



