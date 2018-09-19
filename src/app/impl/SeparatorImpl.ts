import {Separator} from "../Separator";

export class SeparatorImpl implements Separator {
    readonly separator: string;

    constructor(separator: string) {
        this.separator = separator;
    }

    combine(array: Array<string>): string {
        return array.join(this.separator);
    }
}
