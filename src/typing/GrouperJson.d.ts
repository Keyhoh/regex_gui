import {Grouper} from "../main/regexunit/Grouper";

declare module "*.json" {
    interface GrouperJson {
        Groupers: Array<Grouper>;
    }

    const value: GrouperJson;
    export = value;
}
