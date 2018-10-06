import * as React from 'react';
import {RegexUnitImpl} from "../regexunit/impl/RegexUnitImpl";
import {RegexUnit} from "../regexunit/RegexUnit";
import InputComponent from "./InputComponent";

export default class RegexComponent extends React.Component<{ regexUnit: RegexUnit, onChange: (RegexUnit) => void }> {
    public props: { regexUnit: RegexUnit, onChange: (RegexUnit) => void };
    public state: RegexUnit;

    constructor(props: { regexUnit: RegexUnit, onChange: (RegexUnit) => void }) {
        super(props);
        this.state = new RegexUnitImpl(props.regexUnit);
    }

    onChange(index: number, state: RegexUnit): void {
        let cloneUnit: RegexUnit = RegexUnitImpl.cloneField(this.state);
        cloneUnit.regexUnits[index] = state;
        this.setState(cloneUnit);
        this.props.onChange(cloneUnit);
    }

    onTextChange(text: string): void {
        let cloneUnit: RegexUnit = RegexUnitImpl.cloneField(this.state);
        cloneUnit.characters = text;
        this.setState(cloneUnit);
        this.props.onChange(cloneUnit);
    }

    render() {
        const childUnits = this.props.regexUnit.regexUnits.map((unit, index) => {
            return <RegexComponent key={index} regexUnit={unit}
                                   onChange={(state: RegexUnit) => this.onChange(index, state)}/>
        });
        const inputComponent = <InputComponent text={this.props.regexUnit.characters}
                                               onChange={(text: string) => this.onTextChange(text)}/>;

        return <div className={this.props.regexUnit.operator.kind}>
            {childUnits.length ? childUnits : inputComponent}
        </div>
    }
}
