import React from "react";
import TestItem from "./TestItem";

export default class TestItems extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {title, items, onRemove, onToggle} = this.props;
        return (
            <div>
                <h1>{title} {items.length}</h1>
                <input type="text" />
                <ul className="testPackedItems">
                    {
                        items.map((item, index) =>
                            <TestItem key={index} item={item}
                                      onRemove={() => onRemove(item)}
                                      onToggle={() => onToggle(item)} />
                        )
                    }
                </ul>
            </div>
        );
    }
};