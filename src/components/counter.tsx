import { useStore } from "@nanostores/react";
import { counterStore } from "../stores/counterStore";

export const ReactCounter = () => {
    const counter = useStore(counterStore)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={() => counterStore.set(counterStore.get() - 1)}>Decremnt</button>
            {counter}
            <button onClick={() => counterStore.set(counterStore.get() + 1)}>Increment</button>
        </div>
    )
}