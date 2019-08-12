import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      yourName: '',
      message: ''
    };
  }

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="yourName"
          value={this.state.yourName}
          className="form-control"
          placeholder="your name"
          onChange={this.handleChange}
        />
        <textarea
          id="validationTextarea"
          name="message"
          value={this.state.message}
          className="form-control"
          placeholder="write your chat here..."
          onChange={this.handleChange}
        />
        <button className="col-sm-1 btn btn-primary form-control">Send</button>
      </form>
    );
  }
}

export default Form;
