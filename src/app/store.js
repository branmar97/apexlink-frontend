import manageSession from '../reducers/sessionReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const store = createStore(manageSession, applyMiddleware(thunk));

export default store;
