export default function() {
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
}