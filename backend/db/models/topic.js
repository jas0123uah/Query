'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    questionTopic: {type:DataTypes.STRING,allowNull:false}
  }, {});
  Topic.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'questionToTopicsJoinTable',
      otherKey: 'questionId',
      foreignKey: 'topicId', 
      onDelete: 'CASCADE', 
      hooks: true
    }
    Topic.belongsToMany(models.Question, columnMapping);
  };
  return Topic;
};
