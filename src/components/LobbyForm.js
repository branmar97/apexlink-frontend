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

    render() { 
        return (  );
    }
}
 
export default LobbyForm;