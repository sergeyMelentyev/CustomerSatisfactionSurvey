import React from "react";
import { removeItem, toggleItem } from "./TestAppActions";

export default class TestItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleRemove() {
        removeItem(this.props.item);
    }
    handleChange() {
        toggleItem(this.props.item);
    }
    render() {
        const {item} = this.props;

        return (
            <li className="testItem">
                <input type="checkbox" checked={item.packed} onChange={this.handleChange} />
                <span>{this.props.item.value}</span>
                <button onClick={this.handleRemove}>Remove</button>
            </li>
        );
    }
};