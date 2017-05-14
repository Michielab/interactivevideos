var express = require('express');
var router = express.Router();

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

/* GET one media. */
router.get('/:id', function(req, res, next) {
  var mediaId = req.params.id;
  Media
  .find({_id: mediaId})
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
