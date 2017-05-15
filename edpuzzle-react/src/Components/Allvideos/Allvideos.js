import React, { Component } from 'react';
import axios from 'axios'
import Singlevideo from '../Singlevideo/Singlevideo'


class Allvideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: [],
      selectedVideo: {}
    };
  }

//get all the video's with GET request to API
componentWillMount(){
  axios.get("http://localhost:4000/media").then(response => {
    this.setState({ media: response.data.media });
    this.setState({ selectedVideo: response.data.media[0]});
  });
  }

//method to select video
selectVideo(video){
  this.setState({selectedVideo: video});
}

  render () {
    return (
      <div>
        <ul>
          {this.state.media.map(media =>
            <button key={media._id} onClick={()=>{this.selectVideo(media)}}>{media._id}</button>
          )}
        </ul>
        <Singlevideo video={this.state.selectedVideo} />
      </div>
    )

  }
}



export default Allvideos;
