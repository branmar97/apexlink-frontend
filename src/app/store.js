import manageLobbies from '../reducers/lobbiesReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const store = createStore(manageLobbies, applyMiddleware(thunk));

export default store;
