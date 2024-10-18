import React, { useState } from 'react';

const RuleForm = () => {
    const [condition, setCondition] = useState('');
    const [action, setAction] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5000/api/rules', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ condition, action }),
        });
        setCondition('');
        setAction('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={condition} onChange={e => setCondition(e.target.value)} placeholder="Condition" />
            <input value={action} onChange={e => setAction(e.target.value)} placeholder="Action" />
            <button type="submit">Add Rule</button>
        </form>
    );
};

export default RuleForm;