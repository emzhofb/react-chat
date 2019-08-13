import React from 'react';
import axios from 'axios';
import Title from './Title';
import { mdReact } from 'markdown-react-js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      chat: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/')
      .then(res => {
        this.setState({ chat: [...res.data] });
      })
      .catch(err => console.log(err));
  }

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/', {
        name: this.state.name,
        message: this.state.message
      })
      .then(() => {
        this.setState({
          chat: [
            ...this.state.chat,
            { name: this.state.name, message: this.state.message }
          ],
          name: '',
          message: ''
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Title />
        <br />
        {this.state.chat.map((chats, index) => {
          const chat = mdReact()(chats.message);
          return (
            <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">{chats.name}</h5>
                <p className="card-text">{chat}</p>
              </div>
            </div>
          );
        })}
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            className="form-control"
            placeholder="your name"
            onChange={this.handleChange}
          />
          <textarea
            type="text"
            name="message"
            value={this.state.message}
            className="form-control"
            placeholder="write your chat here..."
            onChange={this.handleChange}
          />
          <button className="col-sm-1 btn btn-primary form-control">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
