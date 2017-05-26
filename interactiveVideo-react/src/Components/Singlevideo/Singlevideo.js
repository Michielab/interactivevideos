import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';

class Singlevideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: String,
      corruptVideo: false,
    };
  }


  /*get request to the API to get the playtime of the video, this time is stored in the state,
  if the items array in the response is empty the video is corrupt*/
  componentWillMount(){
    axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${this.props.video.videoId}&key=AIzaSyCxMMKO3pvhEwyCb6XzpvyyA7mT7W5HxNE&part=snippet,contentDetails,statistics,status`).then(response => {
      if(response.data.items.length !== 0){
        var durarionMinSec = response.data.items[0].contentDetails.duration.replace("PT", "").replace("M", ":").replace("S", "");
        this.setState({duration: durarionMinSec});
      } else {
        this.setState({corruptVideo: true});
      }
    });
  }

  render () {
    if (this.state.corruptVideo === true) {
      return null;
    }
    return (
      <div className="single-video" >
        <img className="img-thumbnail img-custom" onClick={()=>{this.props.methodSelectVideo(this.props.video)}} alt=""src={`http://img.youtube.com/vi/${this.props.video.videoId}/0.jpg`}></img>
        <p id="titleSingleVideo">{this.props.video.title} - {this.state.duration} min</p>
      </div>
    )
  } 
}

Singlevideo.propTypes = {
  video: PropTypes.object,
};


export default Singlevideo;
