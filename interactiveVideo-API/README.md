# interactiveVideo

## Introduction
This is a small app that plays video's and displays questions. The questions should stop the video, and be displayed on a specific time. These times are set in the question object, in the video object the relation is made with a certain question. 


## Back-End

To communicate with the collections in the database I've setup two models/schema's(media and question). The media schema has an array of questions in where the relation is made with the question model/schema.

The Back-End is setup with one route called media. In this route a get request is made to the database to find all media, and while doing that the question array is puppulated with the actual question objects. This in order to acces the related question's information via media.  


## Front-End

In the Front-End I've created three components: Allvideos, Singlevideo, and Playvideo. I've chosen for this setup to let the data flow downwards from the Allvideos to Singlevideo to Playvideo.

**Allvideos component**:
Allvideos contains a get request to the API, and stores the returned media's in the state as an array. While doing that the first media in the array is set in the state as the selected video. When rendering the component loops through the array of media's to create a singlevideo component for every media. The media object is passed to the Singlevideo component as props.

**Singlevideo component**:
The Singlevideo component contains a get request to the youtube data API to retrieve the playtime of the video. The component then renders the thumbnail and duration of the video. When the API returns with an empty array the state corruptVideo is set to true, and the component returns an empty div. This is done so no "broken" video's are shown. When clicking on an video, the videoObject is passed to the Allvideos component, and set in the state selectedVideo.

**Playvideo component**:
The Playvideo component receives the media object, and renders the video. When the user clicks play an interval is started to check the current time of the video, with the time of the interactive questions that are in the media's array. When the time matches the time of a question, the question pops-up.
