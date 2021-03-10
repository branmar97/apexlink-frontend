export const fetchRequests = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_REQUESTS'})
        fetch('http://localhost:3000/requests')
        .then(response => {
          return response.json()
        })
        .then(responseJSON => {
          dispatch({ type: 'ADD_REQUESTS', requests: responseJSON })
        })
    }
}