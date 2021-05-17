const initialState = {counter:0};

function Reducer(state = initialState, action) {
    switch(action.type) {
        case "counter/increase": {
            return {counter: state.counter + 1}
        }
        case "counter/decrease": {
            return {counter: state.counter - 1}
        }
        default: {
            return state;
        }
    }
}

export default Reducer;