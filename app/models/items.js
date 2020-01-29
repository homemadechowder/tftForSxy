module.exports = function(sequelize, DataTypes) {
    //item table
    var items = sequelize.define("items", {
      itemName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      recipe: {
        type: DataTypes.STRING,
      }
    });
    return items;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
};