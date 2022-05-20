import { combineReducers } from "redux";
import manageLobbies from './lobbiesReducer';
import manageRequests from './requestsReducer';
import manageProfiles from './profilesReducer';
import authReducer from './auth';

const rootReducer = combineReducers({
    lobbies: manageLobbies,
    requests: manageRequests,
    profiles: manageProfiles,
    auth: authReducer
});

export default rootReducer;
