import React, { Component } from 'react';

class RequestsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gamertagText: '',
            descriptionText: ''
         }
    }

    render() { 
        return ( 
            <div>
                <form>
                    <label htmlFor='gamertagText'>Gamertag</label><br />

                    <input
                        type='text'
                        name='gamertagText'
                        value={this.state.text}
                        placeholder='ex. EliteGamer28'
                    />
                    <br /><br />

                    <label htmlFor='descriptionText'>Description</label><br />

                    <textarea 
                        name='descriptionText'
                        value={this.state.descriptionText}
                    />
                    <br /><br />

                    <button type='submit'>Request</button>
                </form>
            </div>
         );
    }
}
 
export default RequestsForm;