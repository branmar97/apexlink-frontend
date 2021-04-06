import { combineReducers } from "redux";
import manageLobbies from './lobbiesReducer';
import manageRequests from './requestsReducer';

const rootReducer = combineReducers({
    lobbies: manageLobbies,
    requests: manageRequests,
    auth: (state, action) => 'testing'
});

export default rootReducer;
