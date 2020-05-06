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
            return <li className ='thumbnail' ><video width='115' height='65'><source src={video} type="video/webm"></source></video></li>
          })}
          {this.props.media.images.map((image) => {
            return <li className ='thumbnail' ><img src={image} width='115' height='65'></img></li>
          })}
        </ul>
      </div>
    );
  }
}

export default Carousel