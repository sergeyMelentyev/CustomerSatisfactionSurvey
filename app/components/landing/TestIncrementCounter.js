import React from "react";
import CounterStore from "./CounterStore";
import * as actions from "./TestAppActions";

export default class TestIncrementCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = CounterStore.getState();
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.updateState = this.updateState.bind(this);
    }
    updateState() {
        this.setState(CounterStore.getState());
    }
    componentDidMount() {
        CounterStore.on("change", this.updateState);
    }
    componentWillUnmount() {
        CounterStore.off("change", this.updateState);
    }
    handleIncrement() {
        actions.updateCounterOnIncrement(1);
    }
    handleDecrement() {
        actions.updateCounterOnDecrement(1);
    }
    handleReset() {
        actions.updateCounterOnRest();
    }
    render() {
        return (
            <div className="testIncrementUI">
                <p>Counter: {this.state.count}</p>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
};