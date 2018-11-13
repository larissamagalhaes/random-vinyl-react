import React, { Component } from 'react';
import './Album.css';
import vinyl from './vinyl.svg';


class Album extends Component {
    render() {
        const basic_information = this.props.basic_information
        return (
            <div className="ContainerRow">
                <img src={vinyl} className="App-logo" alt="vinyl" />
                <div className="ContainerColumn">
                    <text className="TitleText">
                        {basic_information.title}
                    </text>
                    <text className="SubtitleText">
                        {basic_information.artists[0].name}
                    </text>
                    <text className="SubtitleText">
                        {basic_information.year}
                    </text>
                    <text className="SubtitleText">
                        {basic_information.labels[0].name}
                    </text>
                </div>
            </div>
        );
    }
}

export default Album;