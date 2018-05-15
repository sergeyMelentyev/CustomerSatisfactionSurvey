import React from "react";
import TestItem from "./TestItem";
import TestFilter from "./TestFilter";

export default class TestItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }
    updateSearchTerm(searchTerm) {
        this.setState({ searchTerm });
    }
    render() {
        const {title, items} = this.props;
        return (
            <div>
                <h1>{title} {items.length}</h1>
                <TestFilter searchTerm={this.state.searchTerm} onChange={this.updateSearchTerm} />
                <ul className="testPackedItems">
                    {
                        items
                            .filter(item => item.value.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
                            .map((item, index) =>
                            <TestItem key={index} item={item} />
                        )
                    }
                </ul>
            </div>
        );
    }
};