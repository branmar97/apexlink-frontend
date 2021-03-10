import { combineReducers } from "redux";
import manageLobbies from './lobbiesReducer';
import manageRequests from './requestsReducer';

const rootReducer = combineReducers({
    lobbies: manageLobbies,
    requests: manageRequests
});

export default rootReducer;
