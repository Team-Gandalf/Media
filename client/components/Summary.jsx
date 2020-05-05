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
    let dateObject = new Date(this.props.details.releaseDate);
    let months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', "Nov", 'Dec']
    let date = dateObject.getDate();
    let month = dateObject.getMonth();
    let year = dateObject.getFullYear();
    let dateString = months[month] + " " + date + ", " + year;

    return (
      <div className='summary'>
        <div className='splash'><img src={this.props.details.splash} alt='Game Splash'></img></div>
        <p className='description'>{this.props.details.description}</p>
        <div className='grid3'>
          <span>
            <p className='header'>
              ALL REVIEWS:
            </p>
          </span>
          <span className='reviewValue'>
            {this.props.details.reviews.general} <span className='reviewCount'> ({this.props.details.reviews.total})</span>
          </span>
          <span>
            <p className='header'>RELEASE DATE: </p>
          </span>
          <span className ='releaseDate'>{dateString}</span>
          <span><p className='header'>DEVELOPER: </p></span>
          <span><a className='blerb'>{this.props.details.developer}</a></span>
          <span><p className='header'>PUBLISHER: </p></span>
          <span><a className='blerb'>{this.props.details.publisher}</a></span>
        </div>
        <p className='tagHeader'>Popular user-defined tags for this product:</p>
        <Tags />
      </div>
    );
  }
}

export default Summary