import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increase as actionIncrease, decrease as actionDecrease} from './actions';

function Counter() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(selector);

    const increase = () => {
        dispatch(actionIncrease());
    }

    const decrease = () => {
        dispatch(actionDecrease());
    }

    return (
        <>
            Redux created by: {selector.reducer2.name}<br ></br><br />
            <button onClick={decrease}>-</button>&nbsp;{selector.reducer1.counter}&nbsp;<button onClick={increase}>+</button>
        </>
    )
}

export default Counter;
