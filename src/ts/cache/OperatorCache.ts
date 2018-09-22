// @ts-ignore
import json = require("../../resources/Operators.json");
import {Grouper} from "../app/Grouper";
import {GrouperImpl} from "../app/impl/GrouperImpl";

export class OperatorCache {
    public static operators: Map<string, GrouperImpl>;

    public static initialize() {
        let operators = new Map<string, GrouperImpl>();
        json.Groupers.forEach((value) => {
            operators.set(value.kind, new GrouperImpl(<Grouper> value));
        });
        OperatorCache.setOperators(operators);
    }

    private static setOperators(operators: Map<string, GrouperImpl>): void {
        OperatorCache.operators = new Map(operators);
    }
}
