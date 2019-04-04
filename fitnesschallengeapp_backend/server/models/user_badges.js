module.exports = (sequelize, DataTypes) => {
  const User_Badges = sequelize.define('User_Badges', {
    ubid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    uid: DataTypes.INTEGER,
    bid: DataTypes.INTEGER
  }, {
    tableName: 'a_user_badges',
    freezeTableName: true,
    createdAt: false
  });
  User_Badges.associate = function(models) {
    // associations can be defined here

    User_Badges.belongsTo(models.User, {
      foreignKey: 'uid',
      as: 'User'
    });

    User_Badges.belongsTo(models.Badges, {
      foreignKey: 'bid',
      as: 'Badges'
    })
  };
  return User_Badges;
};
