import { combineReducers } from "redux";
import manageLobbies from './lobbiesReducer';
import manageRequests from './requestsReducer';
import authReducer from './auth';

const rootReducer = combineReducers({
    lobbies: manageLobbies,
    requests: manageRequests,
    auth: authReducer
});

export default rootReducer;
