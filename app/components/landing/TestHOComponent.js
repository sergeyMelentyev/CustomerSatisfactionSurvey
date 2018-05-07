import React from "react";

let HOCompGenerator = (WrappedComponent, state) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = state;
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({count: this.state.count + 1 })
        }, 1000)
    }
    render() {
        return <WrappedComponent {...this.props} {...this.state} />
    }
};
let Comp1 = (props)=> <div>{props.count}</div>;
let Comp2 = (props)=> <div>{props.count}</div>;

let WrappedComp1 = HOCompGenerator(Comp1, {count: 0});
let WrappedComp2 = HOCompGenerator(Comp2, {count: 10});

export default class TestHOComponent extends React.Component {
    render() {
        return (
            <div>
                <WrappedComp1 />
                <WrappedComp2 />
            </div>
        )
    }
};