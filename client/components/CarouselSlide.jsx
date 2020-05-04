import React from 'react';
import ReactDOM from 'react-dom';

class CarouselSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <div className='CarouselSlide' style={this.inlineStyle}>
        <h1>Carousel Slide Mounted!</h1>
      </div>
    );
  }
}

export default CarouselSlide