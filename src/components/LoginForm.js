import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
        username: '',
        password: ''
    }
  }

handleChange = (event) => {
    console.log(event.target.name)
    this.setState({
        [event.target.name]: event.target.value
    }) 
  }

handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    if (this.state.username && this.state.password) {
        this.props.handleLogin(this.state)
    }
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} defaultValue={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} defaultValue={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
