import {EnclosureImpl} from "./EnclosureImpl";

export interface Operator {

    readonly operator: string;
    readonly enclosure: EnclosureImpl;
    readonly separator: string;

    enclose(text: string): string;

    combine(array: Array<string>): string;
}
