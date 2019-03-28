module.exports = (sequelize, DataTypes) => {
  const User_Badges = sequelize.define('User_Badges', {
    uid: DataTypes.INTEGER,
    bid: DataTypes.INTEGER
  }, {
    tableName: 'activity',
    freezeTableName: true,
    createdAt: false
  });
  User_Badges.associate = function(models) {
    // associations can be defined here
  };
  return User_Badges;
};
