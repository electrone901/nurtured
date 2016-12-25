"use strict";

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    body: DataTypes.STRING,
    author: DataTypes.STRING,
    tags: DataTypes.STRING,
    price: DataTypes.STRING,
    phone: DataTypes.STRING,
    year: DataTypes.STRING,
    brand: DataTypes.STRING,
    location: DataTypes.STRING,
    payments_accepted: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.User)
        // Post.hasMany(models.Comment)
        // Post.hasMany(models.Vote)
      }
    }
  });

  return Post;
};

