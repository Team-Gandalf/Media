import React from 'react';
import ReactDOM from 'react-dom';
import CarouselSlide from './CarouselSlide.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='Carousel'>
        <h1>Carousel Mounted!</h1>
        <CarouselSlide />
      </div>
    );
  }
}

export default Carousel