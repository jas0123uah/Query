//import {store} from '../../../frontend/src/index'
const express = require('express')
const asyncHandler = require('express-async-handler');
const createError = require('http-errors')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Question, Answer, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const validateQuestion = [
  check('questionTitle')
    .exists({ checkFalsy: true })
    .isLength({ max: 285 })
    .withMessage('Question title is at most 285 characters.'),
  check('questionText')
    .exists({ checkFalsy: true })
    .isLength({ max: 2000 })
    .withMessage('Question text is at most 2000 characters.'),
  handleValidationErrors,
];
const router = express.Router();


router.get('/', asyncHandler( async (req, res) => {
  const allQuestions = await Question.findAll({include: {model:User}})
  res.json(allQuestions)
}))
router.post(
  '/',
  validateQuestion,
  asyncHandler(async (req, res) => {
    const { questionTitle, questionText, userId } = req.body;
    const question = await Question.create({
    questionTitle,
    questionText,
    userId
  });
    return res.json({
      question,
    });
  }),
);
router.get('/:id(\\d+)', asyncHandler( async (req, res, next) => {
  const questionId = parseInt(req.params.id)
  const question = await Question.findByPk(questionId, {include: {model:User}});
  if (!question) {
    next(createError(404));
  }
  const relevantAnswers = await Answer.findAll({
    where: {questionId: questionId},
    include: {model:User}
  }).then((res) => {
    return res.map((row) => {
      return row.dataValues;
    });
  });

  res.json({question, relevantAnswers})
}))


router.put('/:id(\\d+)', asyncHandler( async (req, res, next) => {

  const questionId = parseInt(req.params.id)
  let question = await Question.findByPk(questionId);
  if (!question) {
    next(createError(404));
  }
  const{
    questionTitle,
    questionText

  } = req.body
  const updates={questionTitle, questionText}
  await question.update(updates)
  question = await Question.findByPk(questionId);


  return res.json(question)
}))




router.delete('/:id(\\d+)', asyncHandler( async (req, res, next) => {

  const questionId = parseInt(req.params.id)
  const question = await Question.findByPk(questionId);
  if (!question) {
    next(createError(404));
  }
  const destroyedQ= await question.destroy()

  return res.json(questionId)
}))

module.exports = router;
