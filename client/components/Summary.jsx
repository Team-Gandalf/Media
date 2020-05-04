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
    {console.log(this.props.details, '!!!!!!!!!!!!!!!')}
    return (
      <div>
        <div><img src={this.props.details.splash} alt='Game Splash'></img></div>
        <p>{this.props.details.description}</p>
        <p>
          ALL REVIEWS:  <span className='blerb'>{this.props.details.reviews.general}</span>
           <span className='reviewCount'>{this.props.details.reviews.total}</span>
        </p>
        <p>RELEASE DATE: <span className ='releaseDate'>{this.props.details.releaseDate}</span></p>
        <p>DEVELOPER: <span className='blerb'>{this.props.details.developer}</span></p>
        <p>Publisher: <span className='blerb'>{this.props.details.publisher}</span></p>
        <Tags />
      </div>
    );
  }
}

export default Summary