import {RegexUnit} from "../src/RegexUnit";
import {OperatorCache} from "../src/cache/OperatorCache";

let unit1 = new RegexUnit();
let unit2 = new RegexUnit();

unit1.setCharacters("unit1");
unit2.setCharacters("unit2");

let unit = new RegexUnit();
unit.setRegexUnits([unit1, unit2]);

const operators = new OperatorCache();
operators.operators.forEach((value) => {
    console.log(value.combine(["test1","test2"]));
});
