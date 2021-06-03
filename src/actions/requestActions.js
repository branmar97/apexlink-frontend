export const fetchRequests = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_REQUESTS' })
        fetch('http://localhost:3001/requests')
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
    fetch('http://localhost:3001/requests', {
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
          dispatch({ type: 'BAD_REQUEST' })
          return Promise.reject(errors);
        });
      }
    })
  }
}