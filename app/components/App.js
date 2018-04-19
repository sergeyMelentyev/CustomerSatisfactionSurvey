import React from "react";

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		fetch("https://sheltered-chamber-49942.herokuapp.com/api")
			.then(response => response.json())
        	.then(data => console.log(data))
	}
	
	render() {
		return (
			<div>MERN!</div>
		);
	}
};