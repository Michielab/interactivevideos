import React, { Component } from 'react';
import axios from 'axios'

class Singlevideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: String
    };
  }

  componentWillMount(){
    axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${this.props.video.videoId}&key=AIzaSyCxMMKO3pvhEwyCb6XzpvyyA7mT7W5HxNE&part=snippet,contentDetails,statistics,status`).then(response => {
     this.setState({duration: response.data.items[0].contentDetails.duration.replace("PT", "").replace("M", ":").replace("S", "")});
    });
  }

  render () {
    return (
      <div>
      <img className="img-thumbnail img-responsive" onClick={()=>{this.props.methodSelectVideo(this.props.video)}} alt=""src={`http://img.youtube.com/vi/${this.props.video.videoId}/0.jpg`}></img>
      <p>{this.props.video.author} - Duration: {this.state.duration} min</p>
      </div>
    )
  }
}

export default Singlevideo;
