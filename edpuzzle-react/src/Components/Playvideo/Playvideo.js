import React, { Component } from 'react';
import YouTube from 'react-youtube';

  var countSeconds;
class Playvideo extends Component {
  constructor(props) {
    super(props);
this._onPlay = this._onPlay.bind(this);
// this._onReady = this._onReady.bind(this);
  }


// _onReady(event) {
// if(this.props.video.questions[0].time == 0) {alert(this.props.video.questions[0].questionId.body)};
//   }

_onPlay(event) {
  countSeconds = setInterval(()=>{
    this.props.video.questions.forEach((question)=>{
        console.log(question.time);
        if(Math.round(event.target.getCurrentTime()) === question.time) {
            console.log(event);
            event.target.pauseVideo();
            alert(question.questionId.body);
        }
      })
},1000);
}

_onPause(event) {
 clearInterval(countSeconds);
}


  render () {
    const opts = {
      height: '390',
      width: '640'
    };

    return (
      <div>
        <YouTube videoId={this.props.video.videoId} opts={opts} onPause={this._onPause} onPlay={this._onPlay}/>
      <h3>{this.props.video.author} - {this.props.video.title}</h3>
    </div>
    )
  }
}

export default Playvideo;
