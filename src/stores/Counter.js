import { useReducer, createContext } from "react";
import CounterReducer from "../reducers/Counter";

const initialState = {'counter': 0};
const counterStore = createContext();
const { Provider } = counterStore;

function CounterProvider({children}){
    const [counterState, counterDispatch] = useReducer(CounterReducer, initialState);

    return <Provider value={{counterState, counterDispatch}}>{children}</Provider>;
}

export { counterStore, CounterProvider };