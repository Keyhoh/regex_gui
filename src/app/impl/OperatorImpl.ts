import {Operator} from "../Operator";
import {GroupingImpl} from "./GroupingImpl";

export class OperatorImpl implements Operator {

    readonly kind: string;
    readonly grouping: GroupingImpl;

    constructor(operator: Operator) {
        this.kind = operator.kind;
        this.grouping = new GroupingImpl(operator.grouping);
    }

    enclose(text: string): string {
        return this.grouping.enclose(text);
    }

    combine(array: Array<string>): string {
        return this.grouping.combine(array);
    }

    unite(array: Array<string>): string {
        return this.enclose(this.combine(array));
    }
}
