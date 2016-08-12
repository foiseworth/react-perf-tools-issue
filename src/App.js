import React, { Component } from 'react';
import perf from 'react-addons-perf';
import logo from './logo.svg';
import './App.css';

window.perf = perf;

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
    this.setTop = this.setTop.bind(this);
    this.renderedElement = null;
  }
  setTop() {
    this.setState({
      clicked: true
    });
  }
  render() {
    console.log('App/Top rendered');
    if (!this.renderedElement) {
      this.renderedElement = <Middle setTop={this.setTop} />;
    }
    
    return this.renderedElement;
  }
}

class Middle extends Component {
  render() {
    return (
      <Bottom setTop={this.props.setTop} />
    );
  }
}

class Bottom extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
    this.click = this.click.bind(this);
  }
  click() {
    this.setState({
      clicked: true
    });
    this.props.setTop();
  }
  render() {
    return (
      <div onClick={this.click}>
        {this.state.clicked ? 'Clicked' : 'Not clicked' }
      </div>
    );
  }
}

export default App;
