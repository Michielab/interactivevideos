import React, { Component } from 'react';




class Singlevideo extends Component {


  render () {

    return (
      <div>
        <iframe width="200" height="300" src={`https://www.youtube.com/embed/${this.props.video}`}></iframe>
      </div>
    )

  }
}

export default Singlevideo;
