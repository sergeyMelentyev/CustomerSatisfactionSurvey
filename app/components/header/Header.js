import React from "react";
import "./header.css";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header__wrapper">
                <p>One</p>
                <p>Two</p>
            </div>
        );
    }
};