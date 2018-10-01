// @ts-ignore
import groupersJson = require("../../resources/grouper/RepititionControls.json");
import {GrouperCacheAbstract} from "./GrouperCacheAbstract";

export class RepititionControlsCache extends GrouperCacheAbstract {
    static readonly groupersJson = groupersJson;
}
