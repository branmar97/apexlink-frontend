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
        const lobby = {
            gamertag: this.state.gamertagText,
            description: this.state.descriptionText,
            lobby_id: this.props.lobbyId
        }
        this.props.addLobby(lobby)

        this.setState({
            gamertagText: '',
            descriptionText: ''
        })
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor='gamertagText'>Gamertag</label><br />

                    <input
                        type='text'
                        name='gamertagText'
                        value={this.state.gamertagText}
                        onChange={this.handleOnChange}
                        placeholder='ex. EliteGamer28'
                    />
                    <br /><br />

                    <label htmlFor='descriptionText'>Description</label><br />

                    <textarea 
                        name='descriptionText'
                        value={this.state.descriptionText}
                        onChange={this.handleOnChange}
                    />
                    <br /><br />

                    <button type='submit'>Join</button>
                </form>
            </div>
         );
    }
}
 
export default RequestsForm;