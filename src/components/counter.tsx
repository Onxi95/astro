import { useState } from "react";

export const ReactCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={() => setCount((prev) => prev - 1)}>Decremnt</button>
            {count}
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
    )
}