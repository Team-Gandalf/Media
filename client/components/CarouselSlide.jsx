import React from 'react';
import ReactDOM from 'react-dom';

class CarouselSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    let item = this.props.selected;

    return (
      <div className='CarouselSlide' >
         {item.video !== undefined && (
        <video className='currentView' src={item.video.video} controls></video>
      )}
      {item.image !== undefined && (
        <img src={item.image} className='currentView' />
      )}
      </div>
    );
  }
}

export default CarouselSlide