import { root } from './index';

export const fetchLobbies = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_LOBBIES'})
        fetch(`${root}/lobbies`)
        .then(response => {
          return response.json()
        })
        .then(responseJSON => {
          dispatch({ type: 'ADD_LOBBIES', lobbies: responseJSON })
        })
    }
} 

export const getLobby = (id) => {
  return dispatch => {
    dispatch({ type: 'LOADING_LOBBY'})
    fetch(`${root}/lobbies/${id}`)
    .then(response => {
      return response.json()
    })
    .then(responseJSON => {
      dispatch({ type: 'GET_LOBBY', lobby: responseJSON })
    })
  }
}

export const addLobby = (data) => {
  return dispatch => {
    return fetch(`${root}/lobbies`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({lobby: data}),
    })
    .then(res => {
      if (res.ok) {
        return res
          .json()
          .then(data =>
            dispatch({ type: 'ADD_LOBBY', lobby: data })
          );
      } else {
        return res.json().then((errors) => {
          return Promise.reject(errors);
        });
      }
    })
  }
}
