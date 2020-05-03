import React from 'react';
import ReactDOM from 'react-dom';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <ul className='tagList'>
          <li><button>Will be mapped dynamically from GAMES.TAGS</button></li>
        </ul>
      </div>
    );
  }
}

export default Tags