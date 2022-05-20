const manageProfiles = (state = { current: {} }, action) => {
    switch(action.type) {
        case 'GET_PROFILE':
            return {
                ...state,
                current: action.profile
            }
        default:
            return state;
    }
}

export default manageProfiles;