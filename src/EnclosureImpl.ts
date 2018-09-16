import {Enclosure} from "./Enclosure";

export class EnclosureImpl implements Enclosure {
    readonly opener: string;
    readonly closure: string;

    constructor(enclosure: EnclosureImpl) {
        this.opener = enclosure.opener;
        this.closure = enclosure.closure;
    }

    enclose(text: string): string {
        return this.opener + text + this.closure;
    }
}
