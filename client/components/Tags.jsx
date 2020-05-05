import React from 'react';
import ReactDOM from 'react-dom';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let tags = this.props.tagList
    console.log(tags)
    return (
      <div>
        <ul className='tagList'>
          {tags.map((tag) => {
            return <li className='listItem'><button className='tag'>{tag}</button></li>
          })}
          <li className='listItem'><button className='tag'> + </button></li>
        </ul>
      </div>
    );
  }
}

export default Tags