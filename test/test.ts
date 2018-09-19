import {RegexUnit} from "../src/app/RegexUnit";
import {OperatorCache} from "../src/cache/OperatorCache";

let unit1 = new RegexUnit();
let unit2 = new RegexUnit();
let unit21 = new RegexUnit();
let unit22 = new RegexUnit();

unit1.setOperator(OperatorCache.operators.get("AND"));
unit1.setCharacters("unit1");
unit2.setOperator(OperatorCache.operators.get("OR"));
unit21.setOperator(OperatorCache.operators.get("NOR"));
unit21.setCharacters("unit21");
unit22.setOperator(OperatorCache.operators.get("OR"));
unit22.setCharacters("unit22");

unit2.setRegexUnits([unit21,unit22]);

let unit = new RegexUnit();
unit.setRegexUnits([unit1, unit2]);

console.log(unit.unify());
