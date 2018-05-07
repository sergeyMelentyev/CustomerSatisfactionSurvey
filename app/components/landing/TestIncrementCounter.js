import React from "react";
import TestIncrementUI from "./TestIncrementUI";

export default class TestIncrementCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleIncrement() {
        this.setState({ count: this.state.count +1 });
    }
    handleDecrement() {
        this.setState({ count: this.state.count -1 });
    }
    handleReset() {
        this.setState({ count: 0 });
    }
    render() {
        return (
            <TestIncrementUI count={this.state.count}
                             onIncrement={this.handleIncrement}
                             onDecrement={this.handleDecrement}
                             onReset={this.handleReset} />
        );
    }
};