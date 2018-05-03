import React from "react";
import "./landing.css";

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a href="/api/auth/current_user">MERN</a>
        );
    }
};