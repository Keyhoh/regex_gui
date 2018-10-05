import {RegexUnitImpl} from "../src/main/regexunit/impl/RegexUnitImpl";
import {OperatorCache} from "../src/main/cache/OperatorCache";
OperatorCache.initialize();

let unit1 = new RegexUnitImpl();
let unit2 = new RegexUnitImpl();
let unit21 = new RegexUnitImpl();
let unit22 = new RegexUnitImpl();
unit1.operator=OperatorCache.groupers.get("OR");
unit1.characters="unit1";
unit2.operator=OperatorCache.groupers.get("OR");
unit21.operator=OperatorCache.groupers.get("NOR");
unit21.characters="unit21";
unit22.operator=OperatorCache.groupers.get("OR");
unit22.characters="unit22";

unit2.regexUnits=[unit21,unit22];

let unit = new RegexUnitImpl();
unit.operator=OperatorCache.groupers.get("OR");
unit.regexUnits=[unit1, unit2];

console.log(unit.unify());
