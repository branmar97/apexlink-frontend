import rootReducer from '../reducers/combinedReducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)));

export default store;
