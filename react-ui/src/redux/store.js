import { applyMiddleware , compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import gameMiddleware from './services/games/apiMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, gameMiddleware)));
