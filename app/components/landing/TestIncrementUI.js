import React from "react";

export default function TestIncrementUI(props) {
    const { count, onIncrement, onDecrement, onReset } = props;
    return (
        <div className="testIncrementUI">
            <p>Counter: {count}</p>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
};