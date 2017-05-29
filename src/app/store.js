import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducerNumber from './reducers/reducer-number';
import reducerUser from './reducers/reducer-user';

const myLoggler = (store) => (next) => (action) => {
    //console.log('Action: ', action);
    next(action);
}

export default createStore(combineReducers({
    reducerNumber: reducerNumber,
    reducerUser: reducerUser
}), {} );

