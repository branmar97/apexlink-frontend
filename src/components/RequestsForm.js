import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addRequest } from '../actions/requestActions';

const RequestsForm = ({ currentUser, lobbyId, dispatchAddRequest}) => {
    const [formData, setFormData] = useState(
        {
            input: "",
            error: false
        }
    )

    const handleOnChange = event => {
        setFormData({
            ...formData,
            input: event.target.value
        })
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        const request = {
            user_id: currentUser.id,
            gamertag: currentUser.gamertag,
            description: formData.input,
            lobby_id: lobbyId
        }
        dispatchAddRequest(request)
        setFormData({
            ...formData,
            input: ""
        })
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
                    value={formData.input}
                    onChange={handleOnChange}
                />

                <button className='bg-transparent hover:bg-red-500 text-white hover:text-white py-2 px-6 border border-white hover:border-transparent uppercase mt-10' type='submit'>Join</button>
            </form>
        </div>
     );
}

const mapStateToProps = ({ auth: { currentUser }, requests: { error } }) => {
    return { currentUser, error };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddRequest: request => dispatch(addRequest(request))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(RequestsForm);