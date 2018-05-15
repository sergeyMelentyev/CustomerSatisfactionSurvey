import React from "react";
import { addItem } from "./TestAppActions";

export default class TestSubmitComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit() {
        addItem(this.state.value);
        this.setState({value: ""});
    }
    render() {
        return (
            <div className="testSubmitComp">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
};