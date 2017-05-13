var express = require('express');
var router = express.Router();

/* Question model. */
const Question = require("../models/questions")

/* GET questions. */
router.get('/', function(req, res, next) {
Question.find({}, (err, question) => {
  if(err) throw err;

 console.log(question);
 res.json({question});

})
});


module.exports = router;
