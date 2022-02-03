//import {store} from '../../../frontend/src/index'
const express = require('express')
const asyncHandler = require('express-async-handler');
const createError = require('http-errors')
const sequelize = require('sequelize');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Question, Answer, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.post('/', asyncHandler( async (req, res) => {
    const { searchTerm } = req.body;
    console.log(searchTerm, "AGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
  const queriedQuestions = await Question.findAll({
      where: {
          questionTitle: {
              [sequelize.Op.iLike]: `%${searchTerm}%` 
          }
      },
      include: {model:User},
})
  console.log(queriedQuestions, "SHAAAAAAAAAAAAAAAAAA");
  res.json(queriedQuestions)
}))

module.exports = router;
