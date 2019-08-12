import React from 'react';
import axios from 'axios';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      message: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    );
  }
}

export default Chat;
