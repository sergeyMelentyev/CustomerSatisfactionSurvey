import React from "react";
import "./landing.css";
import TestHOComponent from "./TestHOComponent";

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <TestHOComponent />
                <a href="/api/auth/current_user">MERN</a>
            </div>
        );
    }
};