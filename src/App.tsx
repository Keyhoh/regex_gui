import * as React from 'react';
import './App.css';
import RegexComponent from "./main/component/RegexComponent";
import {RegexUnitImpl} from "./main/regexunit/impl/RegexUnitImpl";
import {RegexUnit} from "./main/regexunit/RegexUnit";

export default class App extends React.Component<{ regexUnit: RegexUnitImpl }> {
    public props: { regexUnit: RegexUnitImpl };
    public state: { regexUnit: RegexUnitImpl } = {regexUnit: new RegexUnitImpl()};

    constructor(props: { regexUnit: RegexUnitImpl }) {
        super(props);
        this.state.regexUnit = props.regexUnit;
    }

    onChange(state: RegexUnit) {
        this.setState({regexUnit: new RegexUnitImpl(state)});
    }

    render() {

        return <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
                <RegexComponent regexUnit={this.state.regexUnit} onChange={(state: RegexUnit) => this.onChange(state)}/>
            </div>
            <div>{this.state.regexUnit.unify()}</div>
        </div>;
    }
}
