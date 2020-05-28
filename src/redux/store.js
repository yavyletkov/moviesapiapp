import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from "redux-thunk";
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;

