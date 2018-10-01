// @ts-ignore
import groupersJson = require("../../resources/grouper/Operators.json");
import {GrouperCacheAbstract} from "./GrouperCacheAbstract";

export class OperatorCache extends GrouperCacheAbstract {
    static readonly groupersJson = groupersJson;
}
