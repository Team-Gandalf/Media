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
        //console.log(result.data[0], '--------------')
        this.setState({
          game: result.data[0]
        })
      })
  }

  render() {
    console.log(this.state.game.summary, '++++++++++++++++++')
    return (
      <div>
        <h3>All Games > Action Games > GAME.TITLE</h3>
        <h1>GAME.TITLE</h1>
        <button className='button'>Community Hub</button>
        <Carousel />
        <Summary details={this.state.game.summary}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('m_app'))