class Node {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

class Parser {
    static parse(condition) {
        // A very basic parser to create an AST from the condition
        const tokens = condition.split(' '); // simplistic tokenization
        const root = new Node('Condition', tokens[1]);
        root.left = new Node('Variable', tokens[0]);
        root.right = new Node('Value', tokens[2]);
        return root;
    }
}

class Evaluator {
    static evaluate(ast, context) {
        if (ast.type === 'Condition') {
            const leftValue = context[ast.left.value];
            const rightValue = ast.right.value;
            switch (ast.value) {
                case '>':
                    return leftValue > rightValue;
                case '<':
                    return leftValue < rightValue;
                case '==':
                    return leftValue == rightValue;
                // Add more cases as needed
            }
        }
        return false;
    }
}

module.exports = { Parser, Evaluator };