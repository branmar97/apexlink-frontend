import React, { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuth } from "../../actions/auth";
import LoadingSpinner from "../LoadingSpinner";
import Login from "./Login";

function withAuth(WrappedComponent) {
  const Wrapper = ({ dispatchCheckAuth, authChecked, loggedIn, props }) => {
    useEffect(() => {
      dispatchCheckAuth()
    }, [])

    if (!authChecked) {
      return <LoadingSpinner />;
    } else if (!loggedIn) {
      const errorMessage = 'You need to login to view this page.'
      return (
        <>
          <Login errorMessage={errorMessage} />
        </>
      );
    } else {
      return <WrappedComponent {...props} />;
    }
  }


  const mapStateToProps = ({
    auth: { authChecked, loggedIn, currentUser }
  }) => {
    return { authChecked, loggedIn, currentUser };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      dispatchCheckAuth: () => dispatch(checkAuth())
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}

export default withAuth;