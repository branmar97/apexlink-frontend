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
          className='my-32 px-4 max-w-6xl mx-auto text-white'
        >
          <h1 className='font-bold text-2xl uppercase mb-6 text-white'>Login</h1>
          <p className="">{this.state.error && "Invalid email or password"}</p>
          <fieldset>
            <label className='' htmlFor='email'>
              Email
            </label>
            <input
              type='text'
              name='email'
              id='email'
              className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
              onChange={this.handleChange}
              value={this.state.email}
            />
          </fieldset>
          <fieldset>
            <label className='' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
              onChange={this.handleChange}
              value={this.state.password}
            />
          </fieldset>
          <button
            className='bg-transparent hover:bg-red-500 text-white hover:text-white py-2 px-6 border border-white hover:border-transparent uppercase mt-10'
            type='submit'
            valu
          >
            Login
          </button>
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