import React from 'react';
import Carousel from './components/Carousel.jsx'
import Summary from './components/Summary.jsx'
import axios from 'axios'
import TagOverlay from './components/TagOverlay.jsx'

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
    }
    this.overlayHandler = this.overlayHandler.bind(this);
  }

  componentDidMount() {
    axios.get('/media', {
      params: {
        _id: '5eb5e7d4b1b71db410273e72'
      }
    })
      .then((result) => {
        this.setState({
          game: result.data[0]
        })
      })
  }

  overlayHandler() {
    let change = !this.state.overlay
    this.setState({overlay: change})
  }

  render() {
    const {game} = this.state;
    const {title} = game.summary;
    return (
      <div className='media'>
        <div className='titleArea'>
          <h3 className='filePath'> <a href=''>All Games</a> > <a href=''>Action Games</a> > <a href=''>{title}</a></h3>
          <h1 className='title'>{title}</h1>
          <button className='button'>Community Hub</button>
        </div>
        <div className='grid1'>
          <span></span>
          <div className='highlights'>
            <div className='grid2'>
              <span><Carousel media={game.media}/></span>
              <span><Summary details={game.summary} overlayHandler={this.overlayHandler}/></span>
            </div>
          </div>
          <span></span>
          {this.state.overlay && (<TagOverlay tags={game.summary.tags}  overlayHandler={this.overlayHandler} />)}
        </div>
        {/* <div className='space'> yo </div> */}
      </div>

    );
  }
}

export default App;
