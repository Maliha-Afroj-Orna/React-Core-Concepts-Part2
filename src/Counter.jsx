import { useState } from "react";

export default function Counter () {

    // const [state, setState] = useState(initialState);
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const counterStyle = {
        border: '4px solid yellow',
        padding: '10px 40px'
    }

    return (
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}