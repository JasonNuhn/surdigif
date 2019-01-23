import React, { Component } from 'react';

import { withAuthorization } from '../Session';

import gifshot from 'gifshot';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      answer: '',
      id: '',
      userId: ''
    }
    this.getAnswer = this.getAnswer.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  updateAnswer(event) {
    this.setState({
      answer: event.target.value
    });
  }

  getAnswer(event) {
    event.preventDefault();
    let questionId = this.props.id;
    let userId = this.props.userId;
    let element = document.documentElement;
    console.dir(element);
  }

  createGif() {
    gifshot.createGIF({
      gifWidth: 200,
      gifHeight: 200,
      interval: 0.1,
      numFrames: 10,
      frameDuration: 2,
    }, function(obj) {
      if(!obj.error) {
        var image = obj.image,
        animatedImage = document.createElement('img');
        animatedImage.src = image;
        document.body.appendChild(animatedImage);
      }
    });
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.getAnswer}>
      <textarea
        onChange={this.updateAnswer}
        placeholder="Answer"
        value={this.state.answer}
      />
      <button onClick={this.createGif.bind(this)}>Click me</button>
      </form>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);