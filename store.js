import { createStore, applyMiddleware } from 'redux';

import decks from './reducers';
import thunk from 'redux-thunk';

const configureStore = () => createStore(decks, applyMiddleware(thunk));

export default configureStore;
