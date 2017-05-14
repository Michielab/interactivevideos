import React, { Component } from 'react';
import axios from 'axios'

class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: []
    };
  }

onItemClick(event) {
    // axios.get("http://localhost:4000/media/557580900f2b07e0c39d23a0").then(response => {
    //   this.setState({ media: response.data });
    // });
  }

componentWillMount(){
  axios.get("http://localhost:4000/media").then(response => {
    this.setState({ media: response.data.media });
  });

  }


  render () {
      console.log(this.state.media);
    return (
      <div>
        <ul>
          {this.state.media.map(media =>
            <li key={media._id}>{media.title}</li>
          )}
        </ul>
      </div>
    )

  }
}

export default Media;
