import { createStore, combineReducers, applyMiddleware } from 'redux';

import { createLogger } from "redux-logger";

import reducerNumber from './reducer-number';
import reducerUser from './reducer-user';

const myLoggler = (store) => (next) => (action) => {
    //console.log('Action: ', action);
    next(action);
}

// const store = createStore(combineReducers({
//     reducerNumber: reducerNumber,
//     reducerUser: reducerUser
// }), {}, applyMiddleware(myLoggler, createLogger()) );

const store = createStore(combineReducers({
    reducerNumber: reducerNumber,
    reducerUser: reducerUser
}), {} );

export default store;