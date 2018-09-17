import {OperatorImpl} from "./impl/OperatorImpl";
import {OperatorCache} from "../cache/OperatorCache";

export class RegexUnit {
    private operator: OperatorImpl;
    private characters: string;
    private regexUnits: Array<RegexUnit> = [];

    constructor() {
        OperatorCache.initialize();
        this.operator = OperatorCache.operators.get("AND");
    }

    setOperator(operator: OperatorImpl) {
        this.operator = operator;
    }

    setCharacters(characters: string): void {
        this.characters = characters;
    }

    setRegexUnits(regexUnits: Array<RegexUnit>): void {
        this.regexUnits = [...regexUnits];
    }

    unify(isPrime: boolean = true): string {
        switch (this.regexUnits.length) {
            case 0:
                return this.operator.enclose(this.characters);

            default:
                return this.operator.combine(this.regexUnits.map((value) => {
                    return value.unify(false);
                }), isPrime);
        }
    }
}
