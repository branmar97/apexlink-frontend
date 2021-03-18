import React, { Component } from 'react';

class LobbyForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gamertagText: '',
            regionText: '',
            platformText: '',
            gamemodeText: '',
            descriptionText: '',
            micBool: false,
            skillText: ''
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
            region: this.state.regionText,
            platform: this.state.platformText,
            gamemode: this.state.gamemodeText,
            description: this.state.descriptionText,
            mic_required: this.state.micBool,
            skill_level: this.state.skillText
        }
        this.props.addLobby(lobby)

        this.setState({
            gamertagText: '',
            regionText: '',
            platformText: '',
            gamemodeText: '',
            descriptionText: '',
            micBool: false,
            skillText: ''
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

                    <label htmlFor='micBool'>Mic required?</label>

                    <input
                    type='checkbox'
                    name='micBool'
                    defaultChecked={this.state.micBool}
                    onChange={this.handleOnChange}
                    />
                    <br /><br />

                    <label htmlFor='regionText'>Region</label><br />

                    <select 
                    name='regionText'
                    value={this.state.regionText}
                    onChange={this.handleOnChange}
                    >
                        <option value='United States'>United States</option>
                        <option value='Canada'>Canada</option>
                        <option value='United Kingdom'>United Kingdom</option>
                    </select>
                    <br /><br />

                    <label htmlFor='platformText'>Platform</label><br />

                    <select 
                    name='platformText'
                    value={this.state.platformText}
                    onChange={this.handleOnChange}
                    >
                        <option value='PC'>PC</option>
                        <option value='Xbox'>Xbox</option>
                        <option value='Playstation'>Playstation</option>
                    </select>
                    <br /><br />

                    <label htmlFor='gamemodeText'>Gamemode</label><br />

                    <select 
                    name='gamemodeText'
                    value={this.state.gamemodeText}
                    onChange={this.handleOnChange}
                    >
                        <option value='Duos'>Duos</option>
                        <option value='Trios'>Trios</option>
                        <option value='Ranked'>Ranked</option>
                    </select>
                    <br /><br />

                    <label htmlFor='skillText'>Skill</label><br />

                    <select 
                    name='skillText'
                    value={this.state.skillText}
                    onChange={this.handleOnChange}
                    >
                        <option value='Beginner'>Beginner</option>
                        <option value='Intermediate'>Intermediate</option>
                        <option value='Experienced'>Experienced</option>
                    </select>
                    <br /><br />

                    <label htmlFor='descriptionText'>Description</label><br />

                    <textarea 
                    name='descriptionText'
                    value={this.state.descriptionText}
                    onChange={this.handleOnChange}
                    />
                    <br /><br />

                    <button type='submit'>Add Lobby</button>
                </form>
            </div>
         );
    }
}
 
export default LobbyForm;