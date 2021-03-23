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

        event.target.reset()

        this.setState({
            gamertagText: '',
            descriptionText: '',
            micBool: false,
        })
    }

    handleCheckbox = () => {
        const micState = this.state.micBool;
        
        if(micState === false) {
            this.setState({
                micBool: true
            });
        }
        else {
            this.setState({
                micBool: false
            });
        }
    }

    render() { 
        return ( 
            <div>
                <form className='px-4 max-w-6xl mx-auto' onSubmit={this.handleOnSubmit}>
                    <h1 className='font-bold text-2xl uppercase mb-6'>Create Lobby</h1>
                    
                    <label htmlFor='gamertagText'>Gamertag</label>
                    
                    <input 
                    className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                    type='text' 
                    name='gamertagText'
                    value={this.state.gamertagText}
                    onChange={this.handleOnChange}
                    placeholder='ex. EliteGamer28'
                    />

                    <label htmlFor='regionText'>Region</label>

                    <select 
                    className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                    name='regionText'
                    onChange={this.handleOnChange}
                    >
                        <option disabled selected value> 
                            Select an Option 
                        </option> 
                        <option value='United States'>United States</option>
                        <option value='Canada'>Canada</option>
                        <option value='United Kingdom'>United Kingdom</option>
                    </select>

                    <label htmlFor='platformText'>Platform</label>

                    <select 
                    className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                    name='platformText'
                    onChange={this.handleOnChange}
                    >
                        <option disabled selected value> 
                            Select an Option 
                        </option> 
                        <option value='PC'>PC</option>
                        <option value='Xbox'>Xbox</option>
                        <option value='Playstation'>Playstation</option>
                    </select>

                    <label htmlFor='gamemodeText'>Gamemode</label>

                    <select 
                    className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                    name='gamemodeText'
                    onChange={this.handleOnChange}
                    >
                        <option disabled selected value> 
                            Select an Option 
                        </option> 
                        <option value='Duos'>Duos</option>
                        <option value='Trios'>Trios</option>
                        <option value='Ranked'>Ranked</option>
                    </select>

                    <label htmlFor='skillText'>Skill</label>

                    <select 
                    className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                    name='skillText'
                    onChange={this.handleOnChange}
                    >
                        <option disabled selected value> 
                            Select an Option 
                        </option> 
                        <option value='Beginner'>Beginner</option>
                        <option value='Intermediate'>Intermediate</option>
                        <option value='Experienced'>Experienced</option>
                    </select>

                    <div className='pb-4'>
                        <label className='mr-4' htmlFor='micBool'>Mic required?</label>

                        <input
                        type='checkbox'
                        name='micBool'
                        defaultChecked={this.state.micBool}
                        onClick={this.handleCheckbox}
                        />
                    </div>

                    <label htmlFor='descriptionText'>Description</label>

                    <textarea 
                    className='border border-gray-400 block py-6 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                    name='descriptionText'
                    placeholder='Some details about your lobby'
                    value={this.state.descriptionText}
                    onChange={this.handleOnChange}
                    />

                    <button className="bg-transparent hover:bg-red-500 text-white hover:text-white py-2 px-6 border border-white hover:border-transparent uppercase mt-10" type='submit'>Add Lobby</button>
                </form>
            </div>
         );
    }
}
 
export default LobbyForm;