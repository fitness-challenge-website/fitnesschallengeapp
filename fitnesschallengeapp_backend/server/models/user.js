module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uid: {type:DataTypes.STRING,
          primaryKey: true},
    username: DataTypes.STRING,
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    height: DataTypes.STRING,
    gender: DataTypes.STRING,
    totalpoints: DataTypes.FLOAT
    // totalPoints_run: DataTypes.FLOAT,
    // totalPoints_bike: DataTypes.FLOAT,
    // totalPoints_swim: DataTypes.FLOAT,
    // totalPoints_weightlift: DataTypes.FLOAT,
    // totalPoints_teamsports: DataTypes.FLOAT,
    // totalPoints__other: DataTypes.FLOAT
  }, {
    freezeTableName: true,
    tableName: "a_user",
    updatedAt: false
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.User_Group, {
      foreignKey:'uid',
      as: 'User_Group'
    });

    User.hasMany(models.User_Badges, {
      foreignKey:'uid',
      as:'User_Badges'
    });

    User.hasMany(models.User_Activity, {
      foreignKey:'uid',
      as:'User_Activity'
    });

    User.hasMany(models.Friends, {
      foreignKey: 'follower_uid',
      as: 'Friends'
    });
  };

  return User;
};
