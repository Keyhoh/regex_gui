import * as React from "react";

export default class InputComponent extends React.Component<{ text: string, onChange: (text: string) => void }> {
    public state: { text: string };

    constructor(props: { text: string, onChange: (text: string) => void }) {
        super(props);
        this.state = {text: props.text};
    }

    render() {
        return <input type="text" defaultValue={this.props.text} onChange={(e) => this.props.onChange(e.target.value)}/>
    }
}
