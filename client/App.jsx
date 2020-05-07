import React from 'react';
import Carousel from './components/Carousel.jsx'
import Summary from './components/Summary.jsx'
import axios from 'axios'

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
      }
    }
  }

  componentDidMount() {
    axios.get('/media', {
      params: {
        _id: "5eb02a9f085eea158d76257f"
      }
    })
      .then((result) => {
        this.setState({
          game: result.data[0]
        })
      })
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
              <span><Summary details={game.summary}/></span>
            </div>
          </div>
          <span></span>
        </div>
      </div>
    );
  }
}

export default App;
