/*import React from "react";
import {render} from "react-dom";

import { User } from './components/User';
import { Main } from './components/Main';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Max"
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)}/>
                <User username={this.state.username}/>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));*/


//Reducers
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";

const reducerNumber = (state = {
    result: 11,
    lastValues: []
}, action) => {
    switch(action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }           
            break;
        case "SUBSTRACT":
            state = {
                ...state,
                result: state.result - action.payload
            }
            state.lastValues.push(action.payload);
            break;
    }
    return state;
}

const reducerUser = (state = {
    name: "Max",
    age: 37
}, action) => {
    switch(action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name:  action.payload                
            }           
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            }           
            break;
    }
    return state;
}

const myLoggler = (store) => (next) => (action) => {
    console.log('Action: ', action);
    next(action);
}

const store = createStore(combineReducers({
    reducerNumber: reducerNumber,
    reducerUser: reducerUser
}), {}, applyMiddleware(myLoggler, createLogger()) );


store.subscribe( () => {
    console.log('Store updated: ', store.getState());
});


//Actions
store.dispatch({
    type: "ADD",
    payload: 10
});
store.dispatch({
    type: "ADD",
    payload: 101
});

store.dispatch({
    type: "SUBSTRACT",
    payload: 77
});

store.dispatch({
    type: "SET_NAME",
    payload: "Zoro"
});

store.dispatch({
    type: "SET_AGE",
    payload: 42
});



