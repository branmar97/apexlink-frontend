import manageSessions from '../reducers/sessionReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const store = createStore(manageSessions, applyMiddleware(thunk));

export default store;
