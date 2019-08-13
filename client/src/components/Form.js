import React from 'react';
import axios from 'axios';
import Chat from './Chat';
import Title from './Title';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <Chat />
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
