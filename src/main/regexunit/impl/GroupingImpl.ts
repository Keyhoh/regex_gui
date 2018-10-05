import {Grouping} from "../Grouping";
import {EnclosureImpl} from "./EnclosureImpl";

export class GroupingImpl implements Grouping {
    readonly enclosure: EnclosureImpl;
    readonly separator: string;

    constructor(grouping: Grouping) {
        this.enclosure = new EnclosureImpl(grouping.enclosure);
        this.separator = grouping.separator;
    }

    enclose(text: string): string {
        return this.enclosure.enclose(text);
    }

    combine(array: Array<string>): string {
        return array.join(this.separator);
    }

    unite(array: Array<string>): string {
        return this.enclose(this.combine(array));
    }
}
