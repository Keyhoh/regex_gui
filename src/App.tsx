import * as React from 'react';
import './App.css';
import RegexComponent from "./main/component/RegexComponent";
import {RegexUnitImpl} from "./main/regexunit/impl/RegexUnitImpl";
import {OperatorCache} from "./main/cache/OperatorCache";
import {RegexUnit} from "./main/regexunit/RegexUnit";

OperatorCache.initialize();

export default class App extends React.Component {
    private regexUnit: RegexUnitImpl = new RegexUnitImpl();
    private regexText: string = this.regexUnit.unify();

    onChange(state: RegexUnit) {
        this.regexUnit = new RegexUnitImpl(state);
        return this.regexText = this.regexUnit.unify();
    }

    render() {

        let unit1 = new RegexUnitImpl();
        let unit2 = new RegexUnitImpl();
        let unit21 = new RegexUnitImpl();
        let unit22 = new RegexUnitImpl();
        unit1.operator = OperatorCache.groupers.get("OR");
        unit1.characters = "unit1";
        unit2.operator = OperatorCache.groupers.get("OR");
        unit21.operator = OperatorCache.groupers.get("NOR");
        unit21.characters = "unit21";
        unit22.operator = OperatorCache.groupers.get("OR");
        unit22.characters = "unit22";

        unit2.regexUnits = [unit21, unit22];

        this.regexUnit.regexUnits = [unit1, unit2];

        return <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
                <RegexComponent regexUnit={this.regexUnit} onChange={(state: RegexUnit) => this.onChange(state)}/>
                <div>{this.regexText}</div>
            </div>
        </div>;
    }
}
