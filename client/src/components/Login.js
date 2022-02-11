import React, { Component } from "react";

class Login extends React.Component {
  constructor(props) {
      super(props)

    this.state = {
    email: "",
    pwd: "",
  };
  this.handleSubmit=this.handleSubmit.bind(this)
}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            required
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="pwd"
            placeholder="Password..."
            required
            onChange={this.handleChange}
          />
          <button idName="login-button" onSubmit={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;