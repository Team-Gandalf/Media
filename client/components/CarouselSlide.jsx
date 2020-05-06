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
      <div className='CarouselSlide' >
        <img src={this.props.selected} height='337' width='600' className='currentView' />
      </div>
    );
  }
}

export default CarouselSlide