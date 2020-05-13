/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import Carousel from './components/Carousel.jsx';
import Summary from './components/Summary.jsx';
import TagOverlay from './components/TagOverlay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {
        summary: {
          title: '',
          splash: '',
          description: '',
          reviews: { general: '', total: 0 },
          releaseDate: '',
          developer: '',
          publisher: '',
          tags: [],
        },
        media: {
          video: [],
          images: [],
        },
      },
      overlay: false,
    };
    this.overlayHandler = this.overlayHandler.bind(this);
  }

  componentDidMount() {
    const url = window.location.search;
    const id = url.substring(2);
    axios.get('/media', {
      params: {
        proxyId: id,
      },
    })
      .then((result) => {
        this.setState({
          game: result.data[0],
        });
      });
  }

  overlayHandler() {
    const change = !this.state.overlay;
    this.setState({ overlay: change });
  }

  render() {
    const { game } = this.state;
    const { title } = game.summary;
    return (
      <div className="media">
        <div className="titleArea">
          <h3 className="filePath">
            <a href="">All Games</a>
            &nbsp;&gt;&nbsp;
            <a href="">Action Games</a>
            &nbsp;&gt;&nbsp;
            <a href="">{title}</a>
          </h3>
          <h1 className="title">{title}</h1>
          <button className="button" type="button">Community Hub</button>
        </div>
        <div className="grid1">
          <span />
          <div className="highlights">
            <div className="grid2">
              <span><Carousel media={game.media} /></span>
              <span><Summary details={game.summary} overlayHandler={this.overlayHandler} /></span>
            </div>
          </div>
          <span />
          {this.state.overlay
          && (<TagOverlay tags={game.summary.tags} overlayHandler={this.overlayHandler} />)}
        </div>
      </div>

    );
  }
}

export default App;
