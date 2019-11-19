import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange(event) {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div>
        <TextField value={this.name} onChange={e => this.handleChange(e)} />
        Введите логин
      </div>
    )
  }
}

export default Login
