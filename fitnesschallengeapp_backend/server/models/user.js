module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uid: {type:DataTypes.STRING,
          primaryKey: true},
    username: DataTypes.STRING,
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    height: DataTypes.FLOAT
  }, {
    freezeTableName: true,
    tableName: "User",
    updatedAt: false
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.User_Group, {
      foreignKey:'uid',
      as: 'User_Group'
    });

    /*
    User.hasMany(models.User_Badges, {

    });

    User.hasMany(models.User_Activity, {

    });

    User.hasMany(models.Friends, {

    });
    */
  };

  return User;
};
