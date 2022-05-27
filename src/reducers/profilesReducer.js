const manageProfiles = (state = { current: {}, loading: true }, action) => {
    switch(action.type) {
        case 'GET_PROFILE':
            return {
                ...state,
                current: action.profile,
                loading: false
            }
        default:
            return state;
    }
}

export default manageProfiles;