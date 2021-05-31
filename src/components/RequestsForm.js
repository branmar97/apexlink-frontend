import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addLobby } from '../actions/lobbyActions';

const RequestsForm = ({ currentUser, lobbyId, addRequest}) => {
    const [input, setInput] = useState("")

    const handleOnChange = event => {
        setInput(event.target.value)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        const request = {
            user_id: currentUser.id,
            gamertag: currentUser.gamertag,
            description: input,
            lobby_id: lobbyId
        }
        addRequest(request)
        setInput("")
    }

    return ( 
        <div>
            <form className='mx-auto' onSubmit={handleOnSubmit}>
                <h2 className='font-bold text-2xl uppercase mb-6'>Request to Join</h2>

                <label htmlFor='descriptionText'>Description</label>

                <textarea 
                    className='border border-gray-400 block py-6 px-4 w-full focus:outline-none focus:border-red-500 text-black mb-6'
                    name='description'
                    placeholder='Some details about your request'
                    value={input}
                    onChange={handleOnChange}
                />

                <button className='bg-transparent hover:bg-red-500 text-white hover:text-white py-2 px-6 border border-white hover:border-transparent uppercase mt-10' type='submit'>Join</button>
            </form>
        </div>
     );
}

const mapStateToProps = ({ auth: { currentUser } }) => {
    return { currentUser };
};
 
export default connect(mapStateToProps)(RequestsForm);