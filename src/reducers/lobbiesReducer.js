const manageLobbies = (state = { list: [], current: {}, loading: true }, action) => {
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
                list: action.lobbies.reverse(),
                loading: false
            }
        case 'ADD_LOBBY':
            return {
                ...state,
                list: [ action.lobby, ...state.list ]
            }
        case 'UPDATE_LOBBY_STATUS':
            const updatedList = state.list.map(lobby => {
                if (lobby.id == action.lobby.id) {
                    return action.lobby
                }
            })
            return {
                ...state,
                list: updatedList,
                current: action.lobby,
                loading: false
            }
        case 'GET_LOBBY':
            return { 
                ...state,
                current: action.lobby,
                loading: false
             }
        case 'LOADING_LOBBY':
            return {
                ...state,
                current: state.current,
                loading: true
            }
        default:
            return state;
    }
}

export default manageLobbies;