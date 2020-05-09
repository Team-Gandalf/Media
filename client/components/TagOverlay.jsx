import React from 'react';
import ReactDOM from 'react-dom';

class TagOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this)
  }

  handleMouseHover() {
    if (this.state.hover === false) {
      this.setState({ hover: true });
    } else if (this.state.hover === true) {
      this.setState({hover: false});
    }
    console.log(this.state.hover)
  }

  render() {
    let tags = this.props.tags;
    console.log(this.state.hover)

    return (
      <div>
        <div className='shadow'></div>
        <div className='tagOverlay'>
          {this.state.hover && (<p className='overlayHover'>These are tags applied to the product by the most users.  You can click a tag to find other products with that tag applied.  Or, you can hit the plus symbol for any existing tags to increase that tag's popularity on this product</p>) }
          <div className='tagHeader'>
            <div className='topColorBar'></div>
            <h1 className='exit' onClick={() => {this.props.overlayHandler()}}>X</h1>
            <h1 className='overlayHeader'>VIEW AND EDIT TAGS FOR THIS PRODUCT</h1>
          </div>
          <div className='tagBody'>
            <div className='tagGrid'>
              <div className='col1'>
                <p className='prompt'>Popular user-defined tags for this product:
                  <span className='tagsInfo' onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>(?)</span>
                </p>
                <ul>
                  {tags.map((tag) => {
                    return <li className='tagOverlayList'><button className='tag'>{tag}</button></li>
                  })}
                </ul>
              </div>
              <div className='col2'>
                <p className='prompt'>Sign in</p>
                <p className='overlayText'>Sign in to add your own tags to this product.</p>
                <button className='tag overlaySignin' >Sign in</button>
              </div>
            </div>
            <button className='closeButton' onClick={() => {this.props.overlayHandler()}}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TagOverlay