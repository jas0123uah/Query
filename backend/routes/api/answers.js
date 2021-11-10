const express = require('express')
const asyncHandler = require('express-async-handler');
const createError = require('http-errors')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {Answer } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const validateAnswer = [
  check('answerText')
    .exists({ checkFalsy: true })
    .isLength({ max: 2000 })
    .withMessage('Question title is at most 2000 characters.'),
  handleValidationErrors,
];
const router = express.Router();

router.post(
  '/',
  validateQuestion,
  asyncHandler(async (req, res) => {
    const { answerText, userId, questionId } = req.body;
    const answer = await Answer.create({
    answerText,
    userId,
    questionId
  });
    return res.json({
      answer,
    });
  }),
);


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
