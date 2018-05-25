import React, { Component } from 'react';
import './App.css';

const PHOTO_URL = "https://picsum.photos/200?photo=";
const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {
  state = {
    photos: []
  };
  
  componentDidMount() {
    fetch(PHOTO_LIST_URL)
    .then(response => response.json())
    .then(data => {this.setState({photos: data})})
    .catch(err => {
      console.log('Error happened during fetch', err);
    });
  }

  render() {
    const { photos = [] } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1>Photo Wall</h1>
        </header>
        <div className="collage">
            {photos.map( photo => 
                <img alt={ photo.filename }
                     key={ photo.id }
                     src={ PHOTO_URL + photo.post_url }
                />
            )};
        </div>
      </React.Fragment>
    );
  }
}

export default App;
