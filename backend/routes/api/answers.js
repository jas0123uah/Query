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
    .withMessage('Question answer is at most 2000 characters.'),
  handleValidationErrors,
];
const router = express.Router();

router.post(
  '/',
  validateAnswer,
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
  const answerId = parseInt(req.params.id)
  const{answerText} = req.body
  console.log(answerText, answerId)
  let answer = await Answer.findByPk(answerId);
  if (!answer) {
    next(createError(404));
  }
  const updates={answerText}
  await answer.update(updates)
  answer= await Answer.findByPk(answerId);


  return res.json(answerId)
}))




router.delete('/:id(\\d+)', asyncHandler( async (req, res, next) => {
  const answerId = parseInt(req.params.id)
  const answer = await Answer.findByPk(answerId);
  if (!answer) {
    next(createError(404));
  }
  await answer.destroy()

  return res.json(answerId)
}))

module.exports = router;
