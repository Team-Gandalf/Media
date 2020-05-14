/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class TagOverlay extends React.Component {
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
    const { tags } = this.props;

    return (
      <div>
        <div className="tag-overlay-shadow" />
        <div className="tagOverlay">
          {this.state.hover && (<p className="overlayHover">These are tags applied to the product by the most users.  You can click a tag to find other products with that tag applied.  Or, you can hit the plus symbol for any existing tags to increase that tag`&apos;`s  popularity on this product</p>) }
          <div className="media-tagHeader">
            <div className="topColorBar" />
            <h1 className="tag-overlay-exit" onClick={() => { this.props.overlayHandler(); }}>X</h1>
            <h1 className="overlayHeader">VIEW AND EDIT TAGS FOR THIS PRODUCT</h1>
          </div>
          <div className="tagBody">
            <div className="tagGrid">
              <div className="tag-col1">
                <p className="tag-prompt">
                  Popular user-defined tags for this product:
                  <span className="tagsInfo" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>(?)</span>
                </p>
                <ul className="media-list">
                  {tags.map((tag, index) => <li className="tagOverlayList" key={index}><button className="media-tag" type="button">{tag}</button></li>)}
                </ul>
              </div>
              <div className="tag-col2">
                <p className="tag-prompt">Sign in</p>
                <p className="tag-overlayText">Sign in to add your own tags to this product.</p>
                <button className="media-tag overlaySignin" type="button">Sign in</button>
              </div>
            </div>
            <button className="tag-overlay-closeButton" onClick={() => { this.props.overlayHandler(); }} type="button">Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TagOverlay;
