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
        <img src={this.props.selected} className='currentView' />
      </div>
    );
  }
}

export default CarouselSlide