import {Grouping} from "./Grouping";

export interface Grouper {
    readonly kind: string;
    readonly grouping: Grouping;

    enclose(text: string): string;

    combine(array: Array<string>): string;

    unite(array: Array<string>): string;
}
