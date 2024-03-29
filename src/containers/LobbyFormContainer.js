import React, { useState } from 'react';
import { connect } from 'react-redux'

const LobbyFormContainer = ({ addLobby, currentUser }) => {
    const [formData, setFormData] = useState(
        {
            gamemodeText: "",
            descriptionText: "",
            skillText: "",
            micBool: false,
            hidden: true,
            error: false,
            errorMessages: {}
        }
    )

    const handleOnChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        const lobby = {
            user_id: currentUser.id,
            platform: currentUser.platform,
            region: currentUser.region,
            gamemode: formData.gamemodeText,
            description: formData.descriptionText,
            mic_required: formData.micBool,
            skill_level: formData.skillText
        }
        addLobby(lobby)
        .then(() => {
            setFormData({...formData, descriptionText: "", micBool: false })
            event.target.reset()
        })
        .catch((error) => {
            setFormData({
                ...formData,
                error: true,
                errorMessages: error
            })
        })
    }

    const handleErrorMessages = () => {
        const { errorMessages } = formData
        const keys = Object.keys(errorMessages)
        if (errorMessages && keys.length > 0 && errorMessages.constructor === Object) {
            return (
                keys.map((key) => {
                    return (
                        errorMessages[key].map(error => {
                            return (
                                <p className="mb-4 text-red-500">{error}</p>
                            )
                        })
                    )
                })
            )
        } else {
            return null
        }
    }

    const handleCheckbox = () => {
        const micState = formData.micBool;
        
        if(micState === false) {
            setFormData({
                ...formData,
                micBool: true
            });
        }
        else {
            setFormData({
                ...formData,
                micBool: false
            });
        }
    }

    const handleShowForm = () => {
        setFormData({
            ...formData,
            hidden: !formData.hidden
        })
    }

    return ( 
        <div className='max-w-6xl mx-auto mb-12'>
            <button className='hover:bg-red-500 text-white hover:text-white py-2 px-6 border border-white hover:border-transparent uppercase float-right' onClick={handleShowForm}>{formData.hidden ? 'Create Lobby' : 'Hide Form'}</button>
            <form className={formData.hidden ? 'hidden' : ''} onSubmit={handleOnSubmit}>
                <h1 className='font-bold text-2xl uppercase mb-6'>Create Lobby</h1>
                {formData.error && handleErrorMessages()}
                <label htmlFor='gamemodeText'>Gamemode</label>

                <select 
                className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                name='gamemodeText'
                defaultValue=''
                onChange={handleOnChange}
                >
                    <option disabled value=''> 
                        Select an Option 
                    </option> 
                    <option value='Duos'>Duos</option>
                    <option value='Trios'>Trios</option>
                    <option value='Ranked'>Ranked</option>
                </select>

                <label htmlFor='skillText'>Skill Level</label>

                <select 
                className='border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                name='skillText'
                defaultValue=''
                onChange={handleOnChange}
                >
                    <option disabled value=''> 
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
                    defaultChecked={formData.micBool}
                    onClick={handleCheckbox}
                    />
                </div>

                <label htmlFor='descriptionText'>Description</label>

                <textarea 
                className='border border-gray-400 block py-6 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                name='descriptionText'
                placeholder='Some details about your lobby'
                value={formData.descriptionText}
                onChange={handleOnChange}
                />

                <button className="hover:bg-red-500 text-white hover:text-white py-2 px-6 border border-white hover:border-transparent uppercase mt-10" type='submit'>Add Lobby</button>
            </form>
        </div>
    );
}

const mapStateToProps = ({ auth: { currentUser } }) => {
    return { currentUser };
};
 
export default connect(mapStateToProps)(LobbyFormContainer);