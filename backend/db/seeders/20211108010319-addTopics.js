'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Topics', [
 {
   "questionTopic": "Travel",
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTopic": "Television",
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTopic": "Art",
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTopic": "Video Games",
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTopic": "Music",
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTopic": "Movies",
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
