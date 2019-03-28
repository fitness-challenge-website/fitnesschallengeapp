module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    aid: {type:DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true},
    a_name: DataTypes.STRING,
    a_description: DataTypes.STRING,
    a_type: DataTypes.STRING,
    a_duration: DataTypes.INTEGER,
    a_distance: DataTypes.INTEGER,
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
