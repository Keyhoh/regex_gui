import {Separator} from "../Separator";

export class SeparatorImpl implements Separator {
    readonly separator: string;

    separate(array: Array<string>): string {
        return array.join(this.separator);
    }
}
