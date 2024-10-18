import React from 'react';
import RuleForm from './components/RuleForm';
import Evaluator from './components/Evaluator';

function App() {
    return (
        <div>
            <h1>Rule Engine</h1>
            <RuleForm />
            <Evaluator />
        </div>
    );
}

export default App;