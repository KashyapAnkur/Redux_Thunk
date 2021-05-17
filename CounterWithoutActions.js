import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';

function CounterWithoutActions(props) {

    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const increase = () => {
        props.increase();
    }

    const decrease = () => {
        props.decrease();
    }

    return (
        <>
            Redux created by: {selector.reducer2.name}<br ></br><br />
            <button onClick={decrease}>-</button>&nbsp;{selector.reducer1.counter}&nbsp;<button onClick={increase}>+</button>
        </>
    )
}

let mapStateToProps = (state) => {
    return state;
}

let mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch({type:"counter/increase"}),
        decrease: () => setTimeout( () => dispatch({type:"counter/decrease"}),3000)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithoutActions);