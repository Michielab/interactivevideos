import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Button,Modal} from 'react-bootstrap';

var countSeconds;
class Playvideo extends Component {
  constructor(props) {
    super(props);
    this._onPlay = this._onPlay.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getLink = this.getLink.bind(this);
    this.state = {
      showModal: false
    };
  }

  _onPlay(event) {
    countSeconds = setInterval(()=>{
      this.props.video.questions.forEach((question)=>{
        if(Math.round(event.target.getCurrentTime() - 1) === question.time) {
          event.target.pauseVideo();
          this.showModal();
          document.getElementById("question").innerHTML =  question.questionId.body;
        }
      });
    },1000);
  }


  showModal() {
    this.setState({showModal: true});
  }

  hideModal() {
    this.setState({showModal: false});
  }

  _onStateChange(event){
    document.getElementById("linkUrl").setAttribute("class", "hidden");
    if(event.target.getCurrentState !== 1){
      clearInterval(countSeconds);
    }
  }

  getLink(){
    document.getElementById("linkUrl").setAttribute("class", "");
    var videoId = this.props.video.videoId;
    var URLlink = `https://www.youtube.com/watch?v=${videoId}`
    document.getElementById("linkUrl").value = URLlink;
    document.getElementById("linkUrl").select();
  }



  render () {
    document.getElementById("title").innerHTML =  this.props.video.title;
    return (
      <div className="playvideo-component">
        <Modal show={this.state.showModal} onHide={this.hideModal} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Question time!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 id="question"></h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Ok!</Button>
          </Modal.Footer>
        </Modal>
        <YouTube className="video-player" videoId={this.props.video.videoId} onStateChange={this._onStateChange} onPlay={this._onPlay}/>
        <h3 className="title-video-player">{this.props.video.author} - {this.props.video.title}</h3>
        <button id="shareVideoButton" onClick={this.getLink}>Share video</button>
        <input className="hidden" id="linkUrl"></input>
      </div>
    )
  }
}

export default Playvideo;
