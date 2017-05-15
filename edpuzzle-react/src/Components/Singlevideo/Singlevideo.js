import React, { Component } from 'react';
import axios from 'axios'

class Singlevideo extends Component {





  render () {
    return (
      <div>
        <p>{this.props.video.title}</p>
      </div>
    )

  }
}

export default Singlevideo;
