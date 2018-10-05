import {GrouperImpl} from "../regexunit/impl/GrouperImpl";
import {Grouper} from "../regexunit/Grouper";

export abstract class GrouperCacheAbstract {
    static groupers: Map<string, GrouperImpl>;
    static readonly groupersJson;

    static initialize() {
        let groupers = new Map<string, GrouperImpl>();
        this.groupersJson.Groupers.forEach((value) => {
            groupers.set(value.kind, new GrouperImpl(<Grouper> value));
        });
        GrouperCacheAbstract.setGroupers(groupers);
    }

    private static setGroupers(groupers: Map<string, GrouperImpl>): void {
        GrouperCacheAbstract.groupers = new Map(groupers);
    }
}
