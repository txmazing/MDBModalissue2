/* Components */
import Footer from "./components/Footer";
/* Pages */
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
/* React */
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

/* Code */

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Page1} />
				<Route path='/page2' component={Page2} />
			</Switch>
			<Footer />
		</Router>
	);
}
