import React from "react";
import "./landing.css";
// import TestHOComponent from "./TestHOComponent";
// import TestIncrementCounter from "./TestIncrementCounter";

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/*<TestHOComponent />*/}
                {/*<TestIncrementCounter />*/}
                <a href="/api/auth/current_user">MERN</a>
            </div>
        );
    }
};