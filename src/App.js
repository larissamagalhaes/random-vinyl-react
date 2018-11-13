import React, * as react from 'react';
import './App.css';
import './index.css';
import Table from './Table';
import Album from './Album';

class App extends react.Component {
  constructor(propos) {
    super(propos);
    this.state = {
      item: {},
      tracklist: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    this.fetchVinyls()
      .then(json => {
        const item = this.getObjectRandom(json.releases)
        this.fetchMusics(item)
        this.setState({
          item: item
        })
      });

  }

  getObjectRandom(items) {
    let length = items.length - 1;
    const index = Math.floor(Math.random() * length);
    return items[index];
  }

  async fetchVinyls() {
    const res = await fetch('https://api.discogs.com/users/ausamerika/collection/folders/0/releases');
    return res.json();
  }

  fetchMusics(item) {
    fetch(item.basic_information.master_url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          tracklist: json.tracklist,
          isLoaded: true
        })
      });
  }

  render() {
    var { isLoaded, item, tracklist } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      console.log(tracklist);
      return (
        <div className="ContainerColumn">
          <Album basic_information={item.basic_information} />
          <div className="Separator"></div>
          <Table tracklist={tracklist} />
        </div>
      );
    }
  }
}

export default App;
