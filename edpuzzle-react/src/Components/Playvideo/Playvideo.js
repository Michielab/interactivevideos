import React, { Component } from 'react';


class Playvideo extends Component {
  constructor(props) {
    super(props);
// this.ready = this.ready.bind(this);
  }



// ready(){
//   console.log("bjkhdkjfs");
//   if(this.player.getPlayerState() === 1) {
//    countSeconds = setInterval(function(){
//     console.log(Math.round(this.player.getCurrentTime()));
//   },1000)}
//  else if (this.player.getPlayerState() === 2) {
//      clearInterval(countSeconds)
//   }


  // console.log(this.props.video.questions[0].time);
  // console.log(this.player.getPlayerState())
  // console.log(this.player.getCurrentTime());
  // console.log("iframe");
// }

  render () {
    return (
      <div>
      <iframe  width="840" height="560" src={`https://www.youtube.com/embed/${this.props.video.videoId}?enablejsapi=1`}></iframe>
      <h3>{this.props.video.author} - {this.props.video.title}</h3>
    </div>
    )

  }
}

export default Playvideo;
