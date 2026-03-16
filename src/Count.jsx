import { useState } from "react"

export default function Count () {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        const updatedCount = count + 1;
        setCount(updatedCount);
    }

    const handleDecrease = () => {
        {
            count > 0 ? setCount(count - 1) : 0;
        }
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrease}>Increase Count</button>
            <button onClick={handleDecrease}>Decrese Count</button>
            <button onClick={handleReset}>Reset Count</button>
        </div>
    )
}