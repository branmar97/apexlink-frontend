export const fetchSessions = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_SESSIONS'})
        fetch('http://localhost:3000/sessions')
        .then(response => {
          return response.json()
        })
        .then(responseJSON => {
          dispatch({ type: 'ADD_SESSIONS', sessions: responseJSON })
        })
    }
} 