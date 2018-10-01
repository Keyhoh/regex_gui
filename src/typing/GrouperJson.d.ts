import {Grouper} from "../ts/app/Grouper";

declare module "*/resources/grouper/*.json" {
    interface GrouperJson {
        Groupers: Array<Grouper>;
    }

    const value: GrouperJson;
    export = value;
}
