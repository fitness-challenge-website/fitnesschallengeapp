module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    email: DataTypes.STRING,
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
    User.hasMany(models.Group, {
      foreignKey:'GID',
      as: 'Group'
    });
  };

  //User.sync({force:false}).then(()=>{console.log("Sync")})
  return User;
};
