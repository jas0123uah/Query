'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('questionToTopicsJoinTables', [
 {
   "questionId": 1,
   "topicId": 4,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionId": 1,
   "topicId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionId": 2,
   "topicId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionId": 3,
   "topicId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionId": 4,
   "topicId": 5,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionId": 5,
   "topicId": 1,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionId": 6,
   "topicId": 1,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionId": 7,
   "topicId": 4,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionId": 7,
   "topicId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionId": 8,
   "topicId": 6,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionId": 9,
   "topicId": 3,
   "createdAt": new Date(),
   "updatedAt": new Date()
 }
], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
