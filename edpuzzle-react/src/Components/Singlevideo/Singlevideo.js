import React, { Component } from 'react';




class Singlevideo extends Component {


  render () {
    let videoUrl = "https://www.youtube.com/embed/" + this.props.video;

    return (
      <div>
        <iframe width="200" height="300" src={videoUrl}></iframe>
      </div>
    )

  }
}

export default Singlevideo;
