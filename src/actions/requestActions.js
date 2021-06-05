export const fetchRequests = (lobbyId) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_REQUESTS' })
        fetch(`http://localhost:3001/lobbies/${lobbyId}/requests`)
        .then(response => {
          return response.json()
        })
        .then(responseJSON => {
          dispatch({ type: 'ADD_REQUESTS', requests: responseJSON })
        })
    }
}

export const addRequest = (data) => {
  return dispatch => {
    return fetch('http://localhost:3001/requests', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({request: data}),
    })
    .then(res => {
      if (res.ok) {
        return res
          .json()
          .then(data =>
            dispatch({ type: 'ADD_REQUEST', request: data })
          );
      } else {
        return res.json().then((errors) => {
          return Promise.reject(errors);
        });
      }
    })
  }
}