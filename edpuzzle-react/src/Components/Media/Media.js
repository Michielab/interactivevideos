import React, { Component } from 'react';
import axios from 'axios'

class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: []
    };
  }

componentWillMount(){
  axios.get('http://localhost:4000/media')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render () {

    return (
      <div>

      </div>
    )

  }
}

export default Media;
