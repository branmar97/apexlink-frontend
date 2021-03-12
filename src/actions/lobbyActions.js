export const fetchLobbies = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_LOBBIES'})
        fetch('http://localhost:3000/lobbies')
        .then(response => {
          return response.json()
        })
        .then(responseJSON => {
          dispatch({ type: 'ADD_LOBBIES', lobbies: responseJSON })
        })
    }
} 

export const fetchLobby = (id) => {
  return dispatch => {
    dispatch({ type: 'LOADING_LOBBIES'})
    fetch(`http://localhost:3000/lobbies/${id}`)
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
    fetch('http://localhost:3000/lobbies', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({lobby: data}),
    })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: 'ADD_LOBBY', lobby: data })
    })
  }
}