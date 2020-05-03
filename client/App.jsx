import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel.jsx'
import Summary from './components/Summary.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h3>All Games > Action Games > GAME.TITLE</h3>
        <h1>GAME.TITLE</h1>
        <button className='button'>Community Hub</button>
        <Carousel />
        <Summary />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('m_app'))