import React from 'react';
import axios from 'axios';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      chat: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/')
      .then(res => {
        this.setState({ chat: [...res.data] });
      })
      .catch(err => console.log(err));
  }

  render() {
    return this.state.chat.map((chats, index) => {
      return (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{chats.name}</h5>
            <p className="card-text">{chats.message}</p>
          </div>
        </div>
      );
    });
  }
}

export default Chat;
