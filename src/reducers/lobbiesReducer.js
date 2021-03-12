const manageLobbies = (state = { list: [], current: {}, loading: false }, action) => {
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