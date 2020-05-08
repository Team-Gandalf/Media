import React from 'react';
import ReactDOM from 'react-dom';
import CarouselSlide from './CarouselSlide.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
    };
    this.clickHandler = this.clickHandler.bind(this)
  }

  // componentDidMount() {
  //   if (this.props.media.images[0] !== undefined) {
  //     console.log(this.props.media.images[0])
  //     this.setState({selected: this.props.media.images[0]})
  //   }
  // }

  clickHandler(target) {
    this.setState({selected: target})
    //console.log(this.state.selected)
  }

  render() {
    //console.log(this.props.media.images[0])

    if (Object.keys(this.state.selected).length === 0 && this.props.media.images[0]) {
      let item = {image: this.props.media.images[0]}
      this.setState({selected: item})
    }

    return (
      <div className='Carousel'>
        <CarouselSlide selected={this.state.selected} />
        <ul className='slides'>
        {this.props.media.video.map((video) => {
            return <li >
              <div className='thumbnailContainer'>
                <img src={video.thumbnail} className ='thumbnail' onClick={() => {this.clickHandler({video})}}></img>
              </div>
            </li>
          })}
          {this.props.media.images.map((image) => {
            return <li>
              <div className='thumbnailContainer'>
                <img src={image} className ='thumbnail' onClick={() => {this.clickHandler({image})}}></img>
              </div>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default Carousel