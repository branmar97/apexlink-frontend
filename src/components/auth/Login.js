import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";

const Login = ({ dispatchLoginUser, history }) => {
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      error: false
    }
  )

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { email, password } = formData
    dispatchLoginUser({ email, password })
    .then(() => history.push("/"))
    .catch(() => setFormData({
      ...formData,
      error: true
    }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='my-32 px-4 max-w-6xl mx-auto text-white'
    >
      <h1 className='font-bold text-2xl uppercase mb-6 text-white'>Login</h1>
      <p className="">{formData.error && "Invalid email or password"}</p>
      <fieldset>
        <label className='' htmlFor='email'>
          Email
        </label>
        <input
          type='text'
          name='email'
          id='email'
          className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
          onChange={handleChange}
          value={formData.email}
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
          onChange={handleChange}
          value={formData.password}
        />
      </fieldset>
      <button
        className='bg-transparent hover:bg-red-500 text-white hover:text-white py-2 px-6 border border-white hover:border-transparent uppercase mt-10'
        type='submit'
      >
        Login
      </button>
    </form>
  );
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Login);