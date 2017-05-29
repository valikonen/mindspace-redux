const reducerUser = (state, action) => {

    state = {
        name: "Madmax",
        age: 99
    }

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

export default reducerUser;