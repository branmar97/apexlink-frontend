import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";

const Logout = ({ dispatchLogoutUser }) => {
  const handleClick = () => {
    dispatchLogoutUser()
  };

  return (
    // Display button to logout user on click
    <button className='text-white hover:text-red-500 uppercase' onClick={handleClick}>
      Logout
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogoutUser: () => dispatch(logoutUser())
  };
};

export default connect(null, mapDispatchToProps)(Logout);