import {OperatorImpl} from "../OperatorImpl";
// @ts-ignore
import json = require("../../resources/Operators.json");
import {Operator} from "../Operator";

export class OperatorCache {
    operators: Map<string, OperatorImpl>;

    constructor() {
        let operators = new Map<string, OperatorImpl>();
        json.Operators.forEach((value) => {
            operators.set(value.operator, new OperatorImpl(<Operator> value));
        });
        this.setOperators(operators);
    }

    setOperators(operators: Map<string, OperatorImpl>): void {
        this.operators = new Map(operators);
    }
}
