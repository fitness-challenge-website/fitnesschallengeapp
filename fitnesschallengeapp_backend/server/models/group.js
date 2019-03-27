module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    gid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    g_name: DataTypes.STRING
  }, {
    tableName: 'activity',
    freezeTableName: true,
    updatedAt: false
  });
  Group.associate = function(models) {
    // associations can be defined here
  };
  return Group;
};
