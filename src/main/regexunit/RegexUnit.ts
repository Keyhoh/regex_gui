import {GrouperImpl} from "./impl/GrouperImpl";

export interface RegexUnit {
    characters?: string;
    operator?: GrouperImpl;
    regexUnits?: Array<RegexUnit>;
}
