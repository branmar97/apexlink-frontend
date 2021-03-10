const manageSessions = (state = { sessions: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_SESSIONS':
            return {
                ...state,
                sessions: [...state.sessions],
                loading: true
            }
        case 'ADD_SESSIONS':
            return {
                ...state,
                sessions: action.sessions,
                loading: false
            }
        default:
            return state;
    }
}

export default manageSessions;