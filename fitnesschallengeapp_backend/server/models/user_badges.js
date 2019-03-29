module.exports = (sequelize, DataTypes) => {
  const User_Badges = sequelize.define('User_Badges', {
    ubid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    uid: DataTypes.INTEGER,
    bid: DataTypes.INTEGER
  }, {
    tableName: 'user_badges',
    freezeTableName: true,
    createdAt: false
  });
  User_Badges.associate = function(models) {
    // associations can be defined here
  };
  return User_Badges;
};
