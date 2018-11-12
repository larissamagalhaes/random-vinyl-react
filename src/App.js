import React, { Component } from 'react';
import vinyl from './vinyl.svg';
import './App.css';
import './index.css';
import Table from './Table';

class App extends Component {
  render() {
    return (
      <div className="ContainerColumn">
       <div className="ContainerRow">
          <img src={vinyl} className="App-logo" alt="vinyl" />
          <div className="ContainerColumn">
            <text className="TitleText"> Friday The 13th Part II</text>
            <text className="SubtitleText"> Harry Manfredini</text>
            <text className="SubtitleText"> 2015</text>
            <text className="SubtitleText">Waxwork Records</text>
        </div>
      </div>
      <div className="Separator"></div>
        <Table/>
      </div>
    );
  }
}

export default App;
