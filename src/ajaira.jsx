import React, {useState} from "react";
import './ajaira.css'

function Calculator(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const calculatesum = (e)=> {
        e.preventDefault();

        const sum = parseFloat(num1) + parseFloat(num2);

        setResult(sum);
    };
    return (
        <div className="container">
            <h1>simple Calculator</h1>
            <form onSubmit={calculatesum}>
                <input 
                type="number" 
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                />

                <input
                type="number" 
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                />

                <br />
                <button type="submit">Calculate</button>
            </form>

            {result !== null && (
                <h2>Result:{result}</h2>
            )}
        </div>

    );
}

export default Calculator;
