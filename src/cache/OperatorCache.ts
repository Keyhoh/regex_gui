// @ts-ignore
import json = require("../../resources/Operators.json");
import {Operator} from "../app/Operator";
import {OperatorImpl} from "../app/impl/OperatorImpl";

export class OperatorCache {
    public static operators: Map<string, OperatorImpl>;

    public static initialize(){
        let operators = new Map<string, OperatorImpl>();
        json.Operators.forEach((value) => {
            operators.set(value.operator, new OperatorImpl(<Operator> value));
        });
        OperatorCache.setOperators(operators);
    }

    private static setOperators(operators: Map<string, OperatorImpl>): void {
        OperatorCache.operators = new Map(operators);
    }
}
