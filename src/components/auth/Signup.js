import React from "react";
import { connect } from "react-redux";
import { signupUser } from "../../actions/auth";

class Signup extends Component {
    state = { 
        email: '',
        password: '',
        gamertag: '',
        errors: {status: {message: ''}}
    }
    render() { 
        return ( 
            <form>

            </form>
        );
    }
}
 
export default Signup;