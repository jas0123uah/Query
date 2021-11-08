'use strict';
module.exports = (sequelize, DataTypes) => {
  const questionToTopicsJoinTable = sequelize.define('questionToTopicsJoinTable', {
    topicId: {type:DataTypes.INTEGER, allowNull:false},
    questionId: {type:DataTypes.INTEGER, allowNull:false}
  }, {});
  questionToTopicsJoinTable.associate = function(models) {
    // associations can be defined here
  };
  return questionToTopicsJoinTable;
};
