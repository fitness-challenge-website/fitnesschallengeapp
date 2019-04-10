module.exports = (sequelize, DataTypes) => {
  const Friends = sequelize.define('Friends', {
    fid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    req_uid:DataTypes.STRING,
    res_uid:DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    tableName: 'friends',
    freezeTableName: true,
    updatedAt: false
  });
  Friends.associate = function(models) {
    // associations can be defined here
  };
  return Friends;
};
