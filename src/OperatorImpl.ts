import {EnclosureImpl} from "./EnclosureImpl";
import {Operator} from "./Operator";

export class OperatorImpl implements Operator {

    readonly operator: string;
    readonly enclosure: EnclosureImpl;
    readonly separator: string;

    constructor(operator: Operator) {
        this.operator = operator.operator;
        this.enclosure = new EnclosureImpl(operator.enclosure);
        this.separator = operator.separator;
    }

    enclose(text: string): string {
        return this.enclosure.enclose(text);
    }

    combine(array: Array<string>): string {
        return array.join(this.separator);
    }
}
