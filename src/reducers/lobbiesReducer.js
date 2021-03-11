const manageLobbies = (state = { list: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_LOBBIES':
            return {
                ...state,
                list: [...state.lobbies],
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
        default:
            return state;
    }
}

export default manageLobbies;