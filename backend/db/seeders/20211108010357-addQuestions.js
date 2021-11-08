'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Questions', [
 {
   "questionTitle": "What's your favorite Pokemon?",
   "questionText": "What is your favorite Pokemon and why?",
   "userId": 1,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTitle": "Why did Ash let Butterfree go?",
   "questionText": "Ash should've kept Butterfree!",
   "userId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTitle": "What's your favorite tv show?",
   "questionText": "My favorite is American Dad.",
   "userId": 3,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTitle": "Who's your favorite artist?",
   "questionText": "Who is your favorite artist and why?",
   "userId": 4,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTitle": "What's your favorite vacation destination?",
   "questionText": "Currently deciding where to go on vacation. Post your favorite places!",
   "userId": 1,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTitle": "Disney World or Disney Land?",
   "questionText": "Should I go to Disney World or Disney Land?",
   "userId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTitle": "What's your favorite Pokemon generation?",
   "questionText": "My favorite generation is second because you go to both Johto and Kanto",
   "userId": 1,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTitle": "What's your favorite movie?",
   "questionText": "What movie is your all-time favorite?",
   "userId": 1,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "questionTitle": "What's your favorite kind of art?",
   "questionText": "Mine is contemporary.",
   "userId": 1,
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
