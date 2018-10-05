import {GrouperImpl} from "./GrouperImpl";
import {RegexUnit} from "../RegexUnit";
import {OperatorCache} from "../../cache/OperatorCache";

export class RegexUnitImpl implements RegexUnit {
    public characters: string;
    public operator: GrouperImpl;
    public regexUnits: Array<RegexUnitImpl>;

    constructor(unit: RegexUnit = {characters: "", operator: OperatorCache.groupers.get("AND"), regexUnits: []}) {
        this.characters = unit.characters;
        this.operator = unit.operator;
        this.regexUnits = unit.regexUnits.map((u) => new RegexUnitImpl(u));
    }

    unify(): string {
        switch (this.regexUnits.length) {
            case 0:
                return this.operator.enclose(this.characters);

            default:
                return this.operator.combine(this.regexUnits.map((value) => {
                    return value.unify();
                }));
        }
    }

    static cloneField(unit: RegexUnit): RegexUnit {
        return {...unit, regexUnits: [...unit.regexUnits]};
    }
}
