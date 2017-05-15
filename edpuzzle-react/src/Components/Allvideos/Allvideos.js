import React, { Component } from 'react';
import axios from 'axios'
import Singlevideo from '../Singlevideo/Singlevideo'

var url = "http://img.youtube.com/vi/"

class Allvideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: [],
      selectedVideo: String,
      duration: {}
    };
  }

//get all the video's with GET request to API
componentWillMount(){
  axios.get("http://localhost:4000/media").then(response => {
    this.setState({ media: response.data.media });
    this.setState({ selectedVideo: response.data.media[0].videoId});
  });

}

// getDuration(e){
// axios.get("https://www.googleapis.com/youtube/v3/videos?id="+ e + "&key=AIzaSyCxMMKO3pvhEwyCb6XzpvyyA7mT7W5HxNE&part=snippet,contentDetails,statistics,status").then(response => {
//   return response.data.items[0].contentDetails.duration
// });
// }
// <span>{this.getDuration(media.videoId)}</span>


//method to select video
selectVideo(video){
  this.setState({selectedVideo: video});
}

  render () {

    return (
      <div>
        <ul>
          {this.state.media.map(media =>
            <div key={media._id} onClick={()=>{this.selectVideo(media.videoId)}}><img alt=""src={url + media.videoId + "/1.jpg" }></img></div>
        )}
        </ul>
        <Singlevideo video={this.state.selectedVideo} />
    </div>
    )

  }
}

export default Allvideos;
