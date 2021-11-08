'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('Answers', [
 {
   "answerText": "Celebi is my favorite! I'd love to time travel",
   "questionId": 1,
   "userId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "Jirachi is obviously the best. He grants wishes",
   "questionId": 1,
   "userId": 3,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "Ditto is my favorite. It's so cute",
   "questionId": 1,
   "userId": 4,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "Because Butterfree needed to be free!",
   "questionId": 2,
   "userId": 1,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "My favorite is American Dad too! I love Roger the alien and his many personas.",
   "questionId": 3,
   "userId": 1,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "I like Spongebob. \"Is this the Krusty Krab?\"",
   "questionId": 3,
   "userId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "My favorite artist is The Weeknd. I love Wicked Games!",
   "questionId": 4,
   "userId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "I like Britney Spears.",
   "questionId": 4,
   "userId": 3,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "Any beach that has clear blue water is where I'd vacation!",
   "questionId": 5,
   "userId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "I prefer to vacation in the Smoky Mountains! They are beautiful and I love the bears!",
   "questionId": 5,
   "userId": 3,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "Disney World is where I typically go, but that's just because it's an hour from my house.",
   "questionId": 6,
   "userId": 4,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "I like the Hoenn region. My first Pokemon game was Pokemon Emerald.",
   "questionId": 7,
   "userId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "Alola because it's set in the islands!",
   "questionId": 7,
   "userId": 3,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "Sinnoh because it's filled with lengendaries!",
   "questionId": 7,
   "userId": 4,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "Mean Girls is the best movie ever.",
   "questionId": 8,
   "userId": 2,
   "createdAt": new Date(),
   "updatedAt": new Date()
 },
 {
   "answerText": "I like abstract art because it's open to interpretation.",
   "questionId": 9,
   "userId": 3,
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
