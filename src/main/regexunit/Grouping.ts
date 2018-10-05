import {Enclosure} from "./Enclosure";

export interface Grouping {
    readonly enclosure: Enclosure;
    readonly separator: string;

    enclose(text: string): string;

    combine(array: Array<string>): string;

    unite(array: Array<string>): string;
}
