import React from "react";
import TestSubmitComp from "./TestSubmitComp";
import TestItems from "./TestItems";
import appStore from "./TestAppStore"
import "./header.css";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: appStore.getStore()
        };
        this.markAllAsUnpacked = this.markAllAsUnpacked.bind(this);
        this.updateState = this.updateState.bind(this);
    }
    markAllAsUnpacked() {
        const items = this.state.items.map(item => {
            item.packed = false;
            return item;
        });
        this.setState({ items });
    }
    updateState() {
        this.setState({ items: appStore.getStore() })
    }
    componentDidMount() {
        appStore.on("change", this.updateState)
    }
    componentWillUnmount() {
        appStore.off("change", this.updateState)
    }
    render() {
        const unpackedItems = this.state.items.filter(item => !item.packed);
        const packedItems = this.state.items.filter(item => item.packed);

        return (
            <div className="header__wrapper">
                <TestSubmitComp />
                <TestItems title="Unpacked Items" items={unpackedItems} />
                <TestItems title="Packed Items" items={packedItems} />
                <button onClick={this.markAllAsUnpacked}>Mark All As Unpacked</button>
            </div>
        );
    }
};