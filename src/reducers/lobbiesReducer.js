const manageLobbies = (state = { lobbies: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_LOBBIES':
            return {
                ...state,
                lobbies: [...state.lobbies],
                loading: true
            }
        case 'ADD_LOBBIES':
            return {
                ...state,
                lobbies: action.lobbies,
                loading: false
            }
        default:
            return state;
    }
}

export default manageLobbies;