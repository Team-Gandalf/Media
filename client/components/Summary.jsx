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
    let {details} = this.props;

    return (
      <div className='summary'>
        <div className='splash'><img src={details.splash} alt='Game Splash'></img></div>
        <p className='description'>{details.description}</p>
        <div className='grid3'>
          <span className='summaryTopPad'>
            <p className='header'>
              ALL REVIEWS:
            </p>
          </span>
          <span className='reviewValue summaryTopPad'>
            {details.reviews.general} <span className='reviewCount'> ({details.reviews.total})</span>
          </span>
          <span className='summaryTopPad'>
            <p className='header'>RELEASE DATE: </p>
          </span>
          <span className ='releaseDate'>{dateString}</span>
          <span className='summaryTopPad'><p className='header'>DEVELOPER: </p></span>
          <span className='devCol'><a className='blerb'>{details.developer}</a></span>
          <span className='publisherCol'><p className='header'>PUBLISHER: </p></span>
          <span><a className='blerb'>{details.publisher}</a></span>
        </div>
        <p className='tagHeader'>Popular user-defined tags for this product:</p>
        <Tags tagList={details.tags}/>
      </div>
    );
  }
}

export default Summary