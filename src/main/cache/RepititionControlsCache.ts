// @ts-ignore
import grouperJson from '../../resources/grouper/RepititionControls.json';
import {GrouperCacheAbstract} from "./GrouperCacheAbstract";

export class RepititionControlsCache extends GrouperCacheAbstract {
    static readonly groupersJson = grouperJson;
}
