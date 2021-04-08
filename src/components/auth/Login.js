import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";

class Login extends React.Component {
    state = {
      email: "",
      password: "",
      error: false
    };
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      const { email, password } = this.state;
      this.props
        .dispatchLoginUser({ email, password })
        .then(() => this.props.history.push("/"))
        .catch(() => this.setState({ error: true }));
    };
  
    render() {
      return (
        <form
          onSubmit={this.handleSubmit}
          className=''
        >
          <h1 className=''>Login</h1>
          <p className="">{this.state.error && "Invalid email or password"}</p>
          <fieldset>
            <label className='' for='email'>
              Email
            </label>
            <input
              type='text'
              name='email'
              id='email'
              className=''
              onChange={this.handleChange}
              value={this.state.email}
            />
          </fieldset>
          <fieldset>
            <label className='' for='password'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className=''
              onChange={this.handleChange}
              value={this.state.password}
            />
          </fieldset>
          <input
            className=''
            type='submit'
            value='Log In'
          />
        </form>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
    };
  };
  
  export default connect(null, mapDispatchToProps)(Login);