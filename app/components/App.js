import React from "react";

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		fetch("http://localhost:8080/api")
			.then(response => response.json())
        	.then(data => console.log(data))
	}
	
	render() {
		return (
			<div>MERN!</div>
		);
	}
};