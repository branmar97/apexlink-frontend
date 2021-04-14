import React, { Component } from 'react';
import { connect } from 'react-redux'

class RequestsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
            user_id: this.props.currentUser.id,
            gamertag: this.props.currentUser.gamertag,
            description: this.state.descriptionText,
            lobby_id: this.props.lobbyId
        }
        this.props.addRequest(request)

        this.setState({
            descriptionText: ''
        })
    }

    render() { 
        return ( 
            <div>
                <form className='mx-auto' onSubmit={this.handleOnSubmit}>
                    <h2 className='font-bold text-2xl uppercase mb-6'>Request to Join</h2>

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

const mapStateToProps = ({ auth: { currentUser } }) => {
    return { currentUser };
};
 
export default connect(mapStateToProps)(RequestsForm);