/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const tags = this.props.tagList;
    const tagHighlights = tags.slice(0, 3);

    return (
      <div>
        <ul className="tagList">
          {tagHighlights.map((tag, index) => <li key={index} className="listItem"><button className="tag" type="button">{tag}</button></li>)}
          <li className="listItem"><button className="tag" onClick={() => { this.props.overlayHandler(); }} type="button"> + </button></li>
        </ul>
      </div>
    );
  }
}

export default Tags;
