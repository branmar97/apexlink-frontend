import { AUTHENTICATED, NOT_AUTHENTICATED } from '../actions/index';

const initialState = {
  authChecked: false,
  loggedIn: false,
  currentUser: {}
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        authChecked: true,
        loggedIn: true,
        currentUser: action.payload,
      };
    case NOT_AUTHENTICATED:
      return {
        authChecked: true,
        loggedIn: false,
        currentUser: {}
      };
    default:
      return state;
  }
}

export const logoutUser = () => {
    return (dispatch) => {
      return fetch("http://localhost:3001/logout", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      }).then((res) => {
        if (res.ok) {
          return dispatch({ type: NOT_AUTHENTICATED });
        } else {
          return res.json().then((errors) => {
            dispatch({ type: NOT_AUTHENTICATED });
            return Promise.reject(errors);
          });
        }
      });
    };
  };