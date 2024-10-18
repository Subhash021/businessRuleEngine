import React, { useState } from 'react';

const Evaluator = () => {
    const [context, setContext] = useState('');
    const [results, setResults] = useState([]);

    const handleEvaluate = async () => {
        const contextObj = JSON.parse(context);
        const response = await fetch('http://localhost:5000/api/evaluate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contextObj),
        });
        const data = await response.json();
        setResults(data);
    };

    return (
        <div>
            <textarea onChange={e => setContext(e.target.value)} placeholder='{"a": 15, "b": 20}' />
            <button onClick={handleEvaluate}>Evaluate</button>
            <div>{JSON.stringify(results)}</div>
        </div>
    );
};

export default Evaluator;