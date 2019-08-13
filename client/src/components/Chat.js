import React from 'react';
import axios from 'axios';
import { mdReact } from 'markdown-react-js';

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
      const chat = mdReact()(chats.message);
      return (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{chats.name}</h5>
            <p className="card-text">{chat}</p>
          </div>
        </div>
      );
    });
  }
}

export default Chat;
