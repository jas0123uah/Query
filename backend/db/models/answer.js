'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    questionId: {type: DataTypes.INTEGER,
                allowNull:false},
    answerText: {type:DataTypes.TEXT,
                allowNull:false},
    userId: {type:DataTypes.INTEGER,
            allowNull:false}
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.belongsTo(models.User, { foreignKey: 'userId' });
    Answer.belongsTo(models.Question, { foreignKey: 'questionId' });
    
  };
  return Answer;
};
