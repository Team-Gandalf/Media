import React from 'react';
import ReactDOM from 'react-dom';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    let tags = this.props.tagList;
    let tagHighlights = tags.slice(0, 3)
    console.log(this.props)

    return (
      <div>
        <ul className='tagList'>
          {tagHighlights.map((tag) => {
            return <li className='listItem'><button className='tag'>{tag}</button></li>
          })}
          <li className='listItem'><button className='tag' onClick={() => {this.props.overlayHandler()}}> + </button></li>
        </ul>
      </div>
    );
  }
}

export default Tags