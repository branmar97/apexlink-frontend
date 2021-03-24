import React, { Component } from 'react';

class RequestsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gamertagText: '',
            descriptionText: ''
         }
    }

    handleOnChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const request = {
            gamertag: this.state.gamertagText,
            description: this.state.descriptionText,
            lobby_id: this.props.lobbyId
        }
        this.props.addRequest(request)

        this.setState({
            gamertagText: '',
            descriptionText: ''
        })
    }

    render() { 
        return ( 
            <div>
                <form className='px-4 max-w-6xl mx-auto' onSubmit={this.handleOnSubmit}>
                    <h2 className='font-bold text-2xl uppercase mb-6'>Request to Join</h2>

                    <label htmlFor='gamertagText'>Gamertag</label>

                    <input
                        className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                        type='text'
                        name='gamertagText'
                        value={this.state.gamertagText}
                        onChange={this.handleOnChange}
                        placeholder='ex. EliteGamer28'
                    />

                    <label htmlFor='descriptionText'>Description</label>

                    <textarea 
                        className='border border-gray-400 block py-6 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                        name='descriptionText'
                        placeholder='Some details about your request'
                        value={this.state.descriptionText}
                        onChange={this.handleOnChange}
                    />

                    <button className='bg-transparent hover:bg-red-500 text-white hover:text-white py-2 px-6 border border-white hover:border-transparent uppercase mt-10' type='submit'>Join</button>
                </form>
            </div>
         );
    }
}
 
export default RequestsForm;