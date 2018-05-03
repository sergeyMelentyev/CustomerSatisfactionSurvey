import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import Landing from "./landing/Landing";
import Dashboard from "./dashboard/Dashboard";
import SurveyNew from "./surveyNew/SurveyNew";
import "./app.css";

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<BrowserRouter>
				<div className="app__main-container">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/surveys" component={Dashboard} />
                        <Route path="/survey/new" component={SurveyNew} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
};