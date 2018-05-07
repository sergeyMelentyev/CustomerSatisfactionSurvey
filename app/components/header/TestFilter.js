import React from "react";

export default class TestFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onChange(event.target.value);
    }
    render() {
        return (
            <input type="text" value={this.props.searchTerm} onChange={this.handleChange} />
        );
    }
};