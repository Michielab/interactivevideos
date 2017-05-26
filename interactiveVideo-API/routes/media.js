const express = require('express');
const router = express.Router();

/* Media model. */
const Media = require("../models/media")

/* Question model. */
const Question = require("../models/questions")

/* GET all media. */
router.get('/', function(req, res, next) {
  Media
  .find({})
  .populate("questions.questionId")
  .exec((err, media) => {
    if (err) {
      next(err);
      return;
    }
    res.json({media});
  });

});



module.exports = router;
