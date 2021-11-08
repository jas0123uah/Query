const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const questionsRouter = require('./questions.js');

router.use('/session', sessionRouter);
router.use('/questions', questionsRouter)
router.use('/users', usersRouter);



module.exports = router;
