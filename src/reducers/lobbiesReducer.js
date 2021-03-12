const manageLobbies = (state = { list: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_LOBBIES':
            return {
                ...state,
                list: [...state.list],
                loading: true
            }
        case 'ADD_LOBBIES':
            return {
                ...state,
                list: action.lobbies,
                loading: false
            }
        case 'ADD_LOBBY':
            return {
                ...state,
                list: [ ...state.list, action.lobby]
            }
        case 'GET_LOBBY':
            const lobby = state.list.filter(lobby => lobby.id === action.id);
            return { lobby }
        default:
            return state;
    }
}

export default manageLobbies;