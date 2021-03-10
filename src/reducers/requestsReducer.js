const manageRequests = (state = { requests: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_REQUESTS':
            return {
                ...state,
                requests: [...state.requests],
                loading: true
            }
        case 'ADD_REQUESTS':
            return {
                ...state,
                requests: action.requests,
                loading: false
            }
        default:
            return state;
    }
}

export default manageRequests;