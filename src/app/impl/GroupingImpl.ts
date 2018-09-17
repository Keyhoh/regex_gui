import {Grouping} from "../Grouping";
import {EnclosureImpl} from "./EnclosureImpl";
import {SeparatorImpl} from "./SeparatorImpl";

export class GroupingImpl implements Grouping {
    readonly enclosure: EnclosureImpl;
    readonly separator: SeparatorImpl;

    constructor(grouping: Grouping) {
        this.enclosure = grouping.enclosure;
        this.separator = grouping.separator;
    }

    enclose(text: string): string {
        return this.enclosure.enclose(text);
    }

    separate(array: Array<string>): string {
        return this.separator.separate(array);
    }

}
