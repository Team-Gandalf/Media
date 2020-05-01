import React from 'react';
import ReactDOM from 'react-dom';
import Tags from './Tags.jsx'

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>GAME.SPLASH</div>
        <p>GAME.DESCRIPTION</p>
        <p>
          ALL REVIEWS:  <span className='blerb'>GAME.REVIEWS.GENERAL</span>
           <span className='reviewCount'>GAME.REVIEWS.TOTAL</span>
        </p>
        <p>RELEASE DATE: <span className ='releaseDate'>GAME.RELEASEDATE</span></p>
        <p>DEVELOPER: <span className='blerb'>GAME.DEVELOPER</span></p>
        <p>Publisher: <span className='blerb'>GAME.PUBLISHER</span></p>
        <Tags />
      </div>
    );
  }
}

export default Summary