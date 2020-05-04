import React from 'react';
import ReactDOM from 'react-dom';
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
    return (
      <div>
        <h3 className='filePath'> <a href=''>All Games</a> > <a href=''>Action Games</a> > <a href=''>{this.state.game.summary.title}</a></h3>
        <h1 className='title'>{this.state.game.summary.title}</h1>
        <button className='button'>Community Hub</button>
        <div className='media'>
          <Carousel />
          <Summary details={this.state.game.summary}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('m_app'))