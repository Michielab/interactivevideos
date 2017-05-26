const mongoose = require('mongoose');

const Media = require('../models/media');
const Questions = require('../models/questions');


mongoose.connect("mongodb://localhost:27017/interActiveVideos");







const media = [

{
	"_id" : "557580900f2b07e0c39d23a0",
	"author" : "EDpuzzle",
	"questions" : [
		{
			"questionId" : "56b9eb939b1b0aaf44f2147a",
			"time" : 101
		}
	],
	"title" : "Flipping the Classroom: Explained!",
	"videoId" : "iQWvc6qhTds"
},
{
	"_id" : "557580910f2b07e0c39d23a1",
	"author" : "EDpuzzle",
	"questions" : [
		{
			"time" : 0,
			"questionId" : "56b9ebb69b1b0a6380f2147d"
		}
	],
	"title" : "EDpuzzle - Story",
	"videoId" : "K6y745LXA9w"
},
{
	"_id" : "557580910f2b07e0c39d23a2",
	"author" : "EDpuzzle",
	"questions" : [
		{
			"time" : 390,
			"questionId" : "56b9ec0d515d50bea22428e2"
		}
	],
	"title" : "The Science of Happiness -  An Experiment",
	"videoId" : "oHv6vTKD6lg"
},
{
	"_id" : "557580910f2b07e0c39d23a3",
	"questions" : [
		{
			"time" : 0,
			"questionId" : "56b9ec37515d506b802428df"
		},
		{
			"questionId" : "56b9ec8b9b1b0ae33ef2147f",
			"time" : 409
		}
	],
	"title" : "The Science of Happiness - Forgive and Forgett",
	"videoId" : "8o9_TlZyB_Y",
	"author" : "EDpuzzle"
},
{
	"_id" : "557580920f2b07e0c39d23a4",
	"videoId" : "IYT3a3LBYRs",
	"title" : "The Secret to a Happy Family | The Science of Happiness",
	"author" : "EDpuzzle",
	"questions" : [
		{
			"time" : 490,
			"questionId" : "56b9ecc1515d50175c2428d9"
		}
	]
},
{
	"_id" : "557580920f2b07e0c39d23a5",
	"questions" : [
		{
			"time" : 18,
			"questionId" : "56b9ece69b1b0afb74f21479"
		}
	],
	"videoId" : "D8UQJIjcZfA",
	"title" : "The perfect video",
	"author" : "EDpuzzle"
},
{
	"_id" : "557580920f2b07e0c39d23a6",
	"author" : "EDpuzzle",
	"questions" : [
		{
			"questionId" : "56b9ed3a8a36bed57c7b756e",
			"time" : 0
		},
		{
			"time" : 125,
			"questionId" : "56b9ed65515d506b802428e0"
		},
		{
			"time" : 126,
			"questionId" : "56b9ed8b5d1af91179079ebb"
		}
	],
	"title" : "The Game of Finding Love | The Science of Love",
	"videoId" : "Tu_BaE52PxI"
},
{
	"_id" : "557580930f2b07e0c39d23a7",
	"questions" : [
		{
			"time" : 50,
			"questionId" : "56b9edb69b1b0a6380f2147e"
		},
		{
			"time" : 69,
			"questionId" : "56b9edd193239f06a4b185d1"
		},
		{
			"time" : 117,
			"questionId" : "56b9edff5d1af90f6c079ebb"
		},
		{
			"time" : 418,
			"questionId" : "56b9ee225d1af9f345079ebd"
		}
	],
	"title" : "The Power of Compliments",
	"videoId" : "opMQxa1JkuM",
	"author" : "EDpuzzle"
}

]



const questions = [


{
	"_id" : "56b9eb939b1b0aaf44f2147a",
	"body" : "How do you feel about flipping your classroom?"
},
{
	"_id" : "56b9ebb69b1b0a6380f2147d",
	"body" : "Do you know how everything started in EDpuzzle?"
},
{ "_id" : "56b9ec0d515d50bea22428e2", "body" : "Are you happy?" },
{
	"_id" : "56b9ec37515d506b802428df",
	"body" : "Do you consider yourself someone who can forget someone else's error?"
},
{
	"_id" : "56b9ec8b9b1b0ae33ef2147f",
	"body" : "Are capable of forgiving?"
},
{
	"_id" : "56b9ecc1515d50175c2428d9",
	"body" : "What do you think it's more important, having family quantity-time or quality-time?"
},
{
	"_id" : "56b9ece69b1b0afb74f21479",
	"body" : "Do you think it was well explained?"
},
{
	"_id" : "56b9ed3a8a36bed57c7b756e",
	"body" : "Have you ever used Tinder?"
},
{
	"_id" : "56b9ed65515d506b802428e0",
	"body" : "What do you think it's going to happen?"
},
{
	"_id" : "56b9ed8b5d1af91179079ebb",
	"body" : "Do you think Tinder can be considered a game?"
},
{
	"_id" : "56b9edb69b1b0a6380f2147e",
	"body" : "Do you usually give compliment to others?"
},
{
	"_id" : "56b9edd193239f06a4b185d1",
	"body" : "Are you capable of accepting a compliment?"
},
{
	"_id" : "56b9edff5d1af90f6c079ebb",
	"body" : "What do you think they are going to check in this experiment?"
},
{
	"_id" : "56b9ee225d1af9f345079ebd",
	"body" : "Do you think they will get better results this time?"
}

]




Media.create(media, (err, docs)=>{
  if (err) { throw err };
    docs.forEach( (media) => {
    })
    mongoose.connection.close();
});


Questions.create(questions, (err, docs)=>{
  if (err) { throw err };
    docs.forEach( (questions) => {
    })
    mongoose.connection.close();
});
