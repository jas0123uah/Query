'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    questionTitle: {type:DataTypes.STRING,allowNull:false},
    questionText: {type:DataTypes.TEXT,allowNull:false},
    userId: {type:DataTypes.INTEGER,allowNull:false},
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'questionToTopicsJoinTable',
      otherKey: 'topicId',
      foreignKey: 'questionId'
    }
    Question.belongsToMany(models.Topic, columnMapping);
    Question.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Question;
};
