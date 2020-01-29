module.exports = function(sequelize, DataTypes) {
    //MEDIATABLE 
    var champions = sequelize.define("champions", {
      image:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      synergy1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      synergy2:{
        type: DataTypes.STRING,
        allowNull: false
      
      },
      synergy3:{
        type: DataTypes.STRING,
        
      },
      cost:{
        type: DataTypes.INTEGER
      },
      ult:{
        type: DataTypes.STRING
      }

    });
    return champions;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
};