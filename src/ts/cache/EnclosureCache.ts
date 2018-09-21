// @ts-ignore
import json = require("../../resources/Enclosures.json");
import {Enclosure} from "../app/Enclosure";
import {EnclosureImpl} from "../app/impl/EnclosureImpl";

export class EnclosureCache {
    public static enclosures: Map<string, EnclosureImpl>;

    public static initialize(){
        let enclosures = new Map<string, EnclosureImpl>();
        json.Enclosures.forEach((value) => {
            enclosures.set(value.enclosure, new EnclosureImpl(<Enclosure> value));
        });
        EnclosureCache.setEnclosures(enclosures);
    }

    private static setEnclosures(enclosures: Map<string, EnclosureImpl>): void {
        EnclosureCache.enclosures = new Map(enclosures);
    }
}
