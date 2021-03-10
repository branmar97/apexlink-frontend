import manageSession from '../reducers/sessionReducer';
import { createStore } from 'redux';

const store = createStore(manageSession);

export default store;
