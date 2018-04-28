import React from "react";

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<a href="/api/auth/current_user">MERN</a>
		);
	}
};