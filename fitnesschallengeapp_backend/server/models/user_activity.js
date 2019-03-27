module.exports = (sequelize, DataTypes) => {
  const User_Activity = sequelize.define('User_Activity', {
    uid:DataTypes.INTEGER,
    aid:DataTypes.INTEGER,
    duration:DataTypes.INTEGER,
    weight:DataTypes.INTEGER,
    rep:DataTypes.INTEGER,
    speed:DataTypes.FLOAT
  }, {
    tableName: 'activity',
    freezeTableName: true,
    updatedAt: false,
    createdAt: false
  });
  User_Activity.associate = function(models) {
    // associations can be defined here
  };
  return User_Activity;
};
