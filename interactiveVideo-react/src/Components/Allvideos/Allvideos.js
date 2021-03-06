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

  /*get all the video's with GET request to API, and stored in state*/
  componentWillMount(){
    axios.get("http://localhost:4000/media").then(response => {
      this.setState({ media: response.data.media, selectedVideo: response.data.media[0]});
    })
    .catch(function(error){console.log(error);});
  }


  /*method to select and store the selected video*/
  selectVideo(video){
    this.setState({selectedVideo: video});
  }


  render () {
    return (
      <div className="row" >
        <div className="col-sm-12 col-md-9 col-videoplayer">
          <Playvideo  video={this.state.selectedVideo} />
        </div>
        <div className="col-sm-12 col-md-3 scrolling-videolist" >
          {this.state.media.map((video)=>{
            return <Singlevideo clasName="single-video-component" key={video._id} video={video} methodSelectVideo={this.selectVideo}/>
          })}
        </div>
      </div>
    )

  }
}

export default Allvideos;
