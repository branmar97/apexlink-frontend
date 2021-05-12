import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";

const Logout = ({ dispatchLogoutUser }) => {
  const handleClick = () => {
    dispatchLogoutUser()
  };

  return (
    // Display button to logout user on click
    <button className='p-4 mr-12 text-white hover:text-red-500' onClick={handleClick}>
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