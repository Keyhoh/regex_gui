import {Grouping} from "../Grouping";
import {EnclosureImpl} from "./EnclosureImpl";
import {SeparatorImpl} from "./SeparatorImpl";

export class GroupingImpl implements Grouping {
    readonly enclosure: EnclosureImpl;
    readonly separator: SeparatorImpl;

    constructor(grouping: Grouping) {
        this.enclosure = new EnclosureImpl(grouping.enclosure);
        this.separator = new SeparatorImpl(grouping.separator);
    }

    enclose(text: string): string {
        return this.enclosure.enclose(text);
    }

    combine(array: Array<string>): string {
        return this.separator.combine(array);
    }
}
