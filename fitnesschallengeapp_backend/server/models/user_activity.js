module.exports = (sequelize, DataTypes) => {
  const User_Activity = sequelize.define('User_Activity', {
    aid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    uid:DataTypes.STRING,
    duration:DataTypes.INTEGER,
    weight:DataTypes.INTEGER,
    rep:DataTypes.INTEGER,
    speed:DataTypes.FLOAT,
    point:DataTypes.INTEGER
  }, {
    tableName: 'a_user_activity',
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
