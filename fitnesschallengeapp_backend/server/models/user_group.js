module.exports = (sequelize, DataTypes) => {
  const User_Group = sequelize.define('User_Group', {
    ugid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    req_uid:DataTypes.INTEGER,
    res_uid:DataTypes.INTEGER,
    gid: DataTypes.INTEGER,
    status: DataTypes.STRING,
    joinAt: DataTypes.DATE
  }, {
    tableName: 'activity',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  User_Group.associate = function(models) {
    // associations can be defined here
  };
  return User_Group;
};
