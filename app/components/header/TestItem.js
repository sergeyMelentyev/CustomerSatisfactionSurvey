import React from "react";

export default class TestItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {item, onRemove, onToggle} = this.props;

        return (
            <li className="testItem">
                <input type="checkbox" checked={item.packed} onChange={onToggle} />
                <span>{this.props.item.value}</span>
                <button onClick={onRemove}>Remove</button>
            </li>
        );
    }
};