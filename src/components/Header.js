import { counterStore} from '../stores/Counter';
import {useContext} from 'react';

function Header({headerName}) {
    const {counterState} = useContext(counterStore);

    return <h1>{headerName} : {counterState.counter}</h1>
}

export default Header;