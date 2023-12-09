import {useContext} from 'react';
import counterStore from '../stores/Counter';
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "../constants/Counter";

function Counter(props) {
    const {counterState, counterDispatch} = useContext(counterStore);

    return (
        <>
            <h1>{counterState.counter}</h1>
            <div>
                <button  onClick={() => counterDispatch({'type': COUNTER_INCREMENT})}>Increase By One</button>
                <button onClick={() => counterDispatch({'type': COUNTER_DECREMENT})}>Decrease By One</button>
            </div>
        </>
    )
}

export default Counter;