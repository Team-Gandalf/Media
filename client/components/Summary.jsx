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
      <div className='summary'>
        <div className='splash'><img src={this.props.details.splash} alt='Game Splash'></img></div>
        <p className='description'>{this.props.details.description}</p>
        <p className='header'>
          ALL REVIEWS:  <span className='reviewValue'>{this.props.details.reviews.general}
           <span className='reviewCount'> ({this.props.details.reviews.total})</span></span>
        </p>
        <p className='header'>RELEASE DATE: <span className ='releaseDate'>{this.props.details.releaseDate}</span></p>
        <p className='header'>DEVELOPER: <a className='blerb'>{this.props.details.developer}</a></p>
        <p className='header'>PUBLISHER: <a className='blerb'>{this.props.details.publisher}</a></p>
        <p className='tagHeader'>Popular user-defined tags for this product:</p>
        <Tags />
      </div>
    );
  }
}

export default Summary