const increase = () => ({type: "counter/increase"});

const decrease = () => {
    return ((dispatch) => {
        setTimeout( () => {
            dispatch({type: "counter/decrease"})
        }, 3000);
    })
}
export {increase,decrease};