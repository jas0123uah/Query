import {store} from '../../../frontend/src/index'
const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Question } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
function getCurrentUserId(store){
    const state = store.getState();
    return state.user.id

}
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

router.post(
  '/',
  validateQuestion,
  asyncHandler(async (req, res) => {
    const { questionTitle, questionText } = req.body;
    const userId =getCurrentUserId(store)
    const question = await Question.create({
    questionTitle,
    questionText,
    userId
  });

    await setTokenCookie(res, user);

    return res.json({
      question,
    });
  }),
);

module.exports = router;
