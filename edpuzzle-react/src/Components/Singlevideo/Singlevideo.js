import React, { Component } from 'react';
import axios from 'axios'

class Singlevideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: String,
      curroptVideo: false,
    };
  }

  //get request to API to get the time of the video, and checking if the video is there;
  componentWillMount(){
    axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${this.props.video.videoId}&key=AIzaSyCxMMKO3pvhEwyCb6XzpvyyA7mT7W5HxNE&part=snippet,contentDetails,statistics,status`).then(response => {
      if(response.data.items.length !== 0){
        var durarionMinSec = response.data.items[0].contentDetails.duration.replace("PT", "").replace("M", ":").replace("S", "");
        this.setState({duration: durarionMinSec});
      } else {
        this.setState({curroptVideo: true});
      }
    });
  }

  render () {
    if (this.state.curroptVideo === true) {
      return <div></div>
    }
    return (
      <div className="single-video-component" >
        <img className="img-thumbnail img-custom" onClick={()=>{this.props.methodSelectVideo(this.props.video)}} alt=""src={`http://img.youtube.com/vi/${this.props.video.videoId}/0.jpg`}></img>
        <p>{this.props.video.title} - {this.state.duration} min</p>
        <p></p>
      </div>
    )
  }
}

export default Singlevideo;
