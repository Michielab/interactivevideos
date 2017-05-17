import React, { Component } from 'react';
import axios from 'axios'
import Singlevideo from '../Singlevideo/Singlevideo'
import Playvideo from '../Playvideo/Playvideo'

class Allvideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: [],
      selectedVideo: {}
    };
    this.selectVideo = this.selectVideo.bind(this);
  }

//get all the video's with GET request to API
componentWillMount(){
  axios.get("http://localhost:4000/media").then(response => {
    this.setState({ media: response.data.media, selectedVideo: response.data.media[0]});
  })
  .catch(function(error){console.log(error);});
}

// method to select video
selectVideo(video){
  this.setState({selectedVideo: video});
}


  render () {
    return (
      <div className="row" >
        <div className="col-md-3 scrolling-videolist" >
          <img alt="" id="edpuzzle" src="http://localhost:4000/images/edpuzzle.png"></img>
          {this.state.media.map((video)=>{
            {if(video.videoId !== "D8UQJIjcZf"){
          return <Singlevideo key={video._id} video={video} methodSelectVideo={this.selectVideo}/>
          }}
        })}
        </div>
        <div className="col-md-9 col-videoplayer">
          <Playvideo  video={this.state.selectedVideo} />
        </div>
    </div>
    )

  }
}

export default Allvideos;
