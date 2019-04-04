module.exports = (sequelize, DataTypes) => {
  const Friends = sequelize.define('Friends', {
    fid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    req_uid:DataTypes.INTEGER,
    res_uid:DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    tableName: 'a_friends',
    freezeTableName: true,
    updatedAt: false
  });
  Friends.associate = function(models) {
    // associations can be defined here
  };
  return Friends;
};
