import React from "react";
import TestSubmitComp from "./TestSubmitComp";
import TestItems from "./TestItems";
import "./header.css";

let defaultState = [
    {value: "Pants", id: Math.random().toString(36).substr(2, 9), packed: false},
    {value: "Jacket", id: Math.random().toString(36).substr(2, 9), packed: false},
    {value: "Charger", id: Math.random().toString(36).substr(2, 9), packed: false},
    {value: "NoteBook", id: Math.random().toString(36).substr(2, 9), packed: false},
    {value: "Hat", id: Math.random().toString(36).substr(2, 9), packed: false},
    {value: "Sleeping Pills", id: Math.random().toString(36).substr(2, 9), packed: true},
    {value: "Passport", id: Math.random().toString(36).substr(2, 9), packed: true},
    {value: "Sandwich", id: Math.random().toString(36).substr(2, 9), packed: true}
];

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: defaultState
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleToggleItem = this.handleToggleItem.bind(this);
        this.markAllAsUnpacked = this.markAllAsUnpacked.bind(this);
    }
    handleSubmit(value) {
        if (!value) return void 0;
        const result = new Object();
        Object.defineProperties(result, {
            "value": {value: value, writable: true, enumerable: true, configurable: true},
            "id": {value: Math.random().toString(36).substr(2, 9), writable: true, enumerable: true, configurable: true},
            "packed": {value: false, writable: true, enumerable: true, configurable: true}
        });
        this.setState({items: [result, ...this.state.items]});
    }
    handleRemoveItem(item) {
        this.setState({items: this.state.items.filter(stateItem => stateItem.id !== item.id)});
    }
    handleToggleItem(itemToToggle) {
        const items = this.state.items.map(item => {
            if (item.id !== itemToToggle.id) return item;
            item.packed = !itemToToggle.packed;
            return item;
        });
        this.setState({ items });
    }
    markAllAsUnpacked() {
        const items = this.state.items.map(item => {
            item.packed = false;
            return item;
        });
        this.setState({ items });
    }
    render() {
        const unpackedItems = this.state.items.filter(item => !item.packed);
        const packedItems = this.state.items.filter(item => item.packed);

        return (
            <div className="header__wrapper">
                {/*<TestSubmitComp onSubmit={this.handleSubmit} />*/}
                {/*<TestItems title="Unpacked Items" items={unpackedItems} onRemove={this.handleRemoveItem} onToggle={this.handleToggleItem} />*/}
                {/*<TestItems title="Packed Items" items={packedItems} onRemove={this.handleRemoveItem} onToggle={this.handleToggleItem} />*/}
                {/*<button onClick={this.markAllAsUnpacked}>Mark All As Unpacked</button>*/}
            </div>
        );
    }
};