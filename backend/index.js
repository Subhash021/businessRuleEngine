const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;
const uri=process.env.MONGO_URI;
const Rule = require('./models/Rule');
const { Parser, Evaluator } = require('./parser');

app.use(cors());
app.use(bodyParser.json());




main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



// Create a rule
app.post('/api/rules', async (req, res) => {
    const newRule = new Rule(req.body);
    await newRule.save();
    res.status(201).send(newRule);
});

// Get all rules
app.get('/api/rules', async (req, res) => {
    const rules = await Rule.find();
    res.send(rules);
});


// Evaluate rules
app.post('/api/evaluate', async (req, res) => {
    const rules = await Rule.find();
    const context = req.body; // e.g., { a: 15, b: 20 }

    const results = rules.map(rule => {
        const ast = Parser.parse(rule.condition);
        return Evaluator.evaluate(ast, context);
    });

    res.send(results);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});