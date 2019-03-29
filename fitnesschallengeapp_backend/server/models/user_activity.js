module.exports = (sequelize, DataTypes) => {
  const User_Activity = sequelize.define('User_Activity', {
    uaid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    uid:DataTypes.INTEGER,
    aid:DataTypes.INTEGER,
    duration:DataTypes.INTEGER,
    weight:DataTypes.INTEGER,
    rep:DataTypes.INTEGER,
    speed:DataTypes.FLOAT,
    point:DataTypes.INTEGER
  }, {
    tableName: 'user_activity',
    freezeTableName: true,
    updatedAt: false,
    createdAt: false
  });
  User_Activity.associate = function(models) {
    // associations can be defined here
    User_Activity.belongsTo(models.Activity, {
      as: 'Activity',
      foreignKey: 'aid'
    });

    User_Activity.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'uid'
    });
  };
  return User_Activity;
};
