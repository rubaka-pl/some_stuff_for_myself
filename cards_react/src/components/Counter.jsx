import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    const date = new Date("September 28 2024");
    date.setDate(date.getDate() + count);

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="20"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                <span>Step: {step}</span>
            </div>

            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <input
                    type="text"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <button onClick={() => setCount((c) => c + step)}>+</button>
            </div>

            <p>
                <span>
                    {count === 0
                        ? "Today is "
                        : count > 0
                            ? `${count} days from today is `
                            : `${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </p>

            {count !== 0 || step !== 1 ? (
                <div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : null}
        </div>
    );
}


export default Counter