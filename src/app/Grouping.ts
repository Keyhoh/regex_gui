import {EnclosureImpl} from "./impl/EnclosureImpl";
import {SeparatorImpl} from "./impl/SeparatorImpl";

export interface Grouping {
    readonly enclosure: EnclosureImpl;
    readonly separator: SeparatorImpl;

    enclose(text: string): string;

    separate(array: Array<string>): string;
}
