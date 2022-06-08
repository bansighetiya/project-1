import React, { Component, useState } from 'react';

    function Counterfun(props) {
        const [counter, setCounter] = useState(0);

        const inc = () => {
            if(counter < 10){
                setCounter(counter + 1)
            }
        }

        const dec = () => {
            if(counter > 0){
                setCounter(counter - 1)
            }
        }
        
        return (
            <div>
                <button onClick={() => inc()}>+</button>
                <span>{counter}</span>
                <button onClick={() => dec()}>-</button>
            </div>
        );
}

export default Counterfun;