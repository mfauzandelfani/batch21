const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countries', {
    country_id: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    region_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'regions',
        key: 'region_id'
      }
    },
    country_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'countries',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_country_id2",
        unique: true,
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};
