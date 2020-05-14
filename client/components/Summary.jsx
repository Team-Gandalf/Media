/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Tags from './Tags.jsx';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover() {
    if (this.state.hover === false) {
      this.setState({ hover: true });
    } else if (this.state.hover === true) {
      this.setState({ hover: false });
    }
  }

  render() {
    const dateObject = new Date(this.props.details.releaseDate);
    const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = dateObject.getDate();
    const month = dateObject.getMonth();
    const year = dateObject.getFullYear();
    const dateString = `${months[month]} ${date}, ${year}`;
    const { details } = this.props;

    return (
      <div className="game-summary">
        <div className="summary-splashContainer"><img src={details.splash} alt="Game Splash" className="media-splash" /></div>
        <p className="summary-description">{details.description}</p>
        {this.state.hover === true && (
          <span className="summary-review-overlay">
            <p className="summary-reviewStats">
              {details.percentage}
              % of the&nbsp;
              {details.reviews.total}
              {' '}
              user reviews for this game are negative.
              {' '}
            </p>
          </span>
        )}
        <div className="media-grid3">
          <span>
            <p className="media-header">
              ALL REVIEWS:
            </p>
          </span>
          <span className="media-reviewValue" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
            {details.reviews.general}
            <span className="media-reviewCount">
              {' '}
              (
              {details.reviews.total}
              )
            </span>
          </span>
          <span className="summaryTopPad"><p className="media-header">RELEASE DATE: </p></span>
          <span className="media-releaseDate">{dateString}</span>
          <span className="summaryTopPad"><p className="media-header">DEVELOPER: </p></span>
          <span className="media-devCol"><a className="media-blerb">{details.developer}</a></span>
          <span className="media-publisherCol"><p className="media-header">PUBLISHER: </p></span>
          <span><a className="media-blerb">{details.publisher}</a></span>
        </div>
        <p className="media-tagHeader">Popular user-defined tags for this product:</p>
        <Tags tagList={details.tags} overlayHandler={this.props.overlayHandler} />
      </div>
    );
  }
}

export default Summary;
