# Welcome

Congratulations! You are about to pass some interesting, thoughtful and challenging problems. We are as excited as you are to get started. However, before we do it, we wanted to share with you three key points:

1. If you see some point of improvement down the road, we would love to get your honest feedback. We are always open to be better.
2. We want to test your ninja-developer skills: Database, Front-end, and Back-end knowledge. A test driven and easy-to-read code.
3. During the challenges you will be part of the team. This means that you can contact any of us via Slack, video call or in person. We are looking for an excellent developer, and a better teammate.

## Challenge: make any video your lesson

### Goal

As you already know, EDpuzzle is about empowering teachers with awesome video-editing tools to turn any video into an interactive, trackable and personal lesson.

For this reason, your challenge will be to build a simple interactive video player that is capable of pausing and resuming the video once it is time to display an interactive element.

### Instructions

- You will be given a MongoDB database that contains a list of interactive videos (called “media”) from YouTube. On a separate collection, there will be a list of questions for each media.

```
media: {
	 _id: ObjectId(‘xxxxx’),
	 videoId: <youtube video id>,
	 title: <title>,
	 author: <author name>,
	 questions: [ {time: <time in seconds>, question: ObjectId(‘xxxxx’) }, … ,  {...} ]
}

question: {
	 _id: ObjectId(‘xxxxx’),
	 body: <text>
}
```

- You will be given a Github repository URL where you will have to do all your work. Make sure to commit frequently so we can talk and discuss about any doubt you might have.
- You will create a backend with Node.js (Express) that will connect to the database and serve as an API to the front end of the website.   Some requirements of the API are:
	- When fetching the list of medias, you have to augment each media with its duration. The duration is only available through the YouTube Data API. A link to the docs can be found below this README.md file.

```
media: {
	 _id: ObjectId(‘xxxxx’),
	 videoId: <youtube video id>,
	 title: <title>,
	 author: <author name>,
	 questions: [ {time: <time in seconds>, question: ObjectId(‘xxxxx’) }, … ,  {...} ],
	 DURATION: <YOUTUBE VIDEO DURATION>
}
```

- You will build a frontend single page app with React that is capable of:
	- Displaying a list of the interactive videos that can be selected, containing their thumbnails and an indicator of their durations.
	- Playing the selected YouTube interactive video next to the video list.
	- Make the video pause and show a simple alert when there is an interactive element at that point in time - the interactive elements in this case will be questions. There can be an unknown number of questions.
	- It should expose a URL to share a specific video that can be directly accessed through that URL.

- You can use the default Youtube video controls.
- There is no need to show the position of the interactive elements on the video’s timeline.


### Technology

**Backend**
- Node.js with Express
- MongoDB
- Mongoose.js

**Front-end**
- React
- Bootstrap

**Database**

- **MongoURI:** `mongodb://<user>:<password>@candidate.63.mongolayer.com:10327,candidate.64.mongolayer.com:10154/developer-test-michiel?replicaSet=set-56aa50c0ad4b0861c2000532`
- **Mongo Console:** `mongo c154.candidate.64.mongolayer.com:10154/developer-test-michiel -u <user> -p<password>`
- **User:** developer
- **Password:** edpuzzle

**YouTube Data API**

[Node.js Documentation for YouTube OAuth](https://developers.google.com/identity/toolkit/web/quickstart/nodejs#step_1_configure_the_google_identity_toolkit_api)

**Github Repository**

You will be given a Github repository URL where you will have to do all your work. Make sure to commit frequently while you work because we will be checking them so that we can talk and discuss.

**Communication channel**

Slack. An invitation will be sent to your email.
