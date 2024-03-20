import React, { useReducer } from 'react';

let initialState ={
    count1:0,
}
let reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return { count1: state.count1 + 1 };
        case 'decrement':
            return { count1: state.count1 - 1 };
        default:
            return state;
    }
    
}

const Reducer = () => {
    let [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>{count.count1}</p>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
        </div>
    );
};

export default Reducer;