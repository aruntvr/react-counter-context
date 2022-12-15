import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "../constants/Counter";

const CounterReducer = (state, action) => {
    let newState = {...state};

    switch (action.type) {
        case COUNTER_INCREMENT:
            newState.counter += 1;

            return newState;
        case COUNTER_DECREMENT:
            newState.counter -= 1;

            return newState;
        default:
            return newState;
    }
};

export default CounterReducer;