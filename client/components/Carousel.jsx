import React from 'react';
import ReactDOM from 'react-dom';
import CarouselSlide from './CarouselSlide.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  componentDidMount() {
    this.setState({selected: this.props.media.images[0]})
  }

  render() {
    console.log(this.state.selected)

    return (
      <div className='Carousel'>
        <CarouselSlide selected={this.props.media.images[0]} />
        <ul className='slides'>
        {this.props.media.video.map((video) => {
            return <li >
              <div className='thumbnailContainer'>
                <video className ='thumbnail'><source src={video}></source></video>
              </div>
            </li>
          })}
          {this.props.media.images.map((image) => {
            return <li>
              <div className='thumbnailContainer'>
                <img src={image} className ='thumbnail' ></img>
              </div>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default Carousel