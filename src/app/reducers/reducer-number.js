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

export default reducerNumber;