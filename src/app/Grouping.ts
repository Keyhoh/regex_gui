import {EnclosureImpl} from "./impl/EnclosureImpl";

export interface Grouping {
    readonly enclosure: EnclosureImpl;
    readonly separator: string;

    enclose(text: string): string;

    combine(array: Array<string>): string;
}
