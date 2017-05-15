import React, { Component } from 'react';
import axios from 'axios'
import Singlevideo from '../Singlevideo/Singlevideo'


class Allvideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: [],
      // selectedVideo: media
    };
  }


componentWillMount(){
  axios.get("http://localhost:4000/media").then(response => {
    this.setState({ media: response.data.media });
  });

  }


callback(event){

}

  render () {
      console.log(this.state.media);
    return (
      <div>
        <ul>
          {this.state.media.map(media =>
            <li key={media._id} >{media.title}</li>
          )}
        </ul>
        <Singlevideo />
      </div>
    )

  }
}

export default Allvideos;
