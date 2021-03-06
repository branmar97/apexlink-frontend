const manageRequests = (state = { list: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_REQUESTS':
            return {
                ...state,
                list: [...state.list],
                loading: true
            }
        case 'ADD_REQUESTS':
            return {
                ...state,
                list: action.requests,
                loading: false
            }
        case 'ADD_REQUEST':
            return {
                ...state,
                list: [ ...state.list, action.request]
            }
        default:
            return state;
    }
}

export default manageRequests;