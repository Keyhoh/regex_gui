import {Grouper} from "../Grouper";
import {GroupingImpl} from "./GroupingImpl";

export class GrouperImpl implements Grouper {

    readonly kind: string;
    readonly grouping: GroupingImpl;

    constructor(operator: Grouper) {
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
        return this.grouping.unite(array);
    }
}
