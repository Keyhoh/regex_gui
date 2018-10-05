import * as React from 'react';
import {RegexUnitImpl} from "../regexunit/impl/RegexUnitImpl";
import {RegexUnit} from "../regexunit/RegexUnit";

export default class RegexComponent extends React.Component<{ regexUnit: RegexUnit, onChange }> {
    public props: { regexUnit: RegexUnit, onChange };
    public state: RegexUnit;

    constructor(props: { regexUnit: RegexUnit, onChange }) {
        super(props);
        this.state = new RegexUnitImpl(props.regexUnit);
    }

    onChange(index: number, state: RegexUnit) {
        let cloneUnit: RegexUnit = RegexUnitImpl.cloneField(this.state);
        cloneUnit.regexUnits[index] = state;
        this.setState(cloneUnit);
        this.props.onChange(cloneUnit);
        console.log(this.state.regexUnits);
    }

    onTextChange(e) {
        let cloneUnit: RegexUnit = RegexUnitImpl.cloneField(this.state);
        cloneUnit.characters = e.target.value;
        this.setState(cloneUnit);
        this.props.onChange(cloneUnit);
    }

    render() {
        const childUnits = this.props.regexUnit.regexUnits.map((unit, index) => {
            return <RegexComponent key={index} regexUnit={unit}
                                   onChange={(state: RegexUnit) => this.onChange(index, state)}/>
        });
        const inputComponent = <input type="text" defaultValue={this.state.characters}
                                      onChange={(e) => this.onTextChange(e)}/>;

        return <div className={this.props.regexUnit.operator.kind}>
            {childUnits.length ? childUnits : inputComponent}
        </div>
    }
}
