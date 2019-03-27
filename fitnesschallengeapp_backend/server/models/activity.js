module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    aid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    a_name: DataTypes.STRING,
    avg_calorie: DataTypes.INTEGER
  }, {
    tableName: 'activity',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  Activity.associate = function(models) {
    // associations can be defined here
  };
  return Activity;
};
