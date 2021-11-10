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
      foreignKey: 'questionId',
      onDelete: 'CASCADE',
      hooks: true
    }
    Question.belongsToMany(models.Topic, columnMapping);
    Question.hasMany(models.Answer, { foreignKey: 'questionId', onDelete: 'CASCADE', hooks: true })
    Question.belongsTo(models.User);
  };
  return Question;
};
