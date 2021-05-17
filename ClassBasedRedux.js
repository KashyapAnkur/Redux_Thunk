import React from 'react';
import {connect} from 'react-redux';

class ClassBasedRedux extends React.Component{
    constructor(props) {
        super(props);
    }

    increase = () => {
        this.props.increase();
    }

    decrease = () => {
        this.props.decrease();
    }

    decreaseWithoutThunk = () => {
        this.props.decreaseWithoutThunk();
    }

    render () {
        return (
            <>
                Redux created by: {this.props.reducer2.name}<br ></br><br />
                <button onClick={this.decrease}>-</button>
                <button onClick={this.decreaseWithoutThunk}> - (without thunk)</button><br />
                {this.props.reducer1.counter}<br />
                <button onClick={this.increase}>+</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch({type: "counter/increase"}),
        decrease: () => setTimeout( () => dispatch({type: "counter/decrease"}),3000),
        decreaseWithoutThunk: () => dispatch({type: "counter/decrease"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassBasedRedux);