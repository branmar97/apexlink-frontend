export const fetchLobbies = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_SESSIONS'})
        fetch('http://localhost:3000/lobbies')
        .then(response => {
          return response.json()
        })
        .then(responseJSON => {
          dispatch({ type: 'ADD_LOBBIES', lobbies: responseJSON })
        })
    }
} 