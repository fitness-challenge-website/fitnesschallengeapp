module.exports = (sequelize, DataTypes) => {
  const Badges = sequelize.define('Badges', {
    bid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    b_name: DataTypes.STRING,
    level: DataTypes.STRING
  }, {
    tableName: "a_badges",
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  Badges.associate = function(models) {
    // associations can be defined here
  };
  return Badges;
};
