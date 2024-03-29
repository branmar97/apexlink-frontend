import React, { useState } from "react";
import { connect } from "react-redux";
import { signupUser } from "../../actions/auth";

const Signup = ({ dispatchSignupUser, history }) => {
    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
            gamertag: "",
            platform: "",
            region: "",
            errors: {status: {message: ""}}
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
        const { email, password, gamertag, platform, region } = formData;
        dispatchSignupUser({ email, password, gamertag, platform, region })
        .then(() => history.push("/"))
        .catch((errors) => setFormData({ errors }));
    }

    return ( 
        <form
            onSubmit={handleSubmit}
            className='my-32 px-4 max-w-6xl mx-auto text-white'
        >
            <h1 className='font-bold text-2xl uppercase mb-6 text-white'>Sign Up</h1>
            <p className='text-red-500'>{formData.errors.status.message}</p>

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

            <fieldset>
            <label className='' htmlFor='gamertag'>
                Gamertag
            </label>
            <input
                type='text'
                name='gamertag'
                id='gamertag'
                className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                onChange={handleChange}
                value={formData.gamertag}
            />
            </fieldset>

            <fieldset>
            <label className='' htmlFor='platform'>
                Platform
            </label>
            <select 
                className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                name='platform'
                defaultValue=''
                onChange={handleChange}
                >
                    <option disabled value=''> 
                        Select an Option 
                    </option> 
                    <option value='PC'>PC</option>
                    <option value='Xbox'>Xbox</option>
                    <option value='Playstation'>Playstation</option>
            </select>
            </fieldset>

            <fieldset>
            <label className='' htmlFor='region'>
                Region
            </label>
                <select 
                    className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                    name='region'
                    defaultValue=''
                    onChange={handleChange}
                    >
                        <option disabled value=''> 
                            Select an Option 
                        </option> 
                        <option value='United States'>United States</option>
                        <option value='Canada'>Canada</option>
                        <option value='United Kingdom'>United Kingdom</option>
                </select>
            </fieldset>

            <button
            className='bg-transparent hover:bg-red-500 text-white hover:text-white py-2 px-6 border border-white hover:border-transparent uppercase mt-10'
            type='submit'
            value='Sign Up'
            >
             Signup
            </button>
        </form>
        );
}

const mapDispatchToProps = (dispatch) => {
    return {
      dispatchSignupUser: (credentials) => dispatch(signupUser(credentials))
    };
  };
  
export default connect(null, mapDispatchToProps)(Signup);