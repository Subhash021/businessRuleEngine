const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
    condition: String,
    action: String,
});

module.exports = mongoose.model('Rule', ruleSchema);